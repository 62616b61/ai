import Animation from 'services/animation'

export default class Runner {
  constructor (events, stages) {
    this.events = events
    this.stages = stages
    this.stage = null

    this.run()
  }

  async run (act) {
    if (!this.stage) this.stage = new this.stages['stage0']()
    if (!act) act = this.stage.initialAct

    this.events.emit('layout', this.stage.layout ? this.stage.layout : 'default')

    for (let directive of this.stage.storyline[act]) {
      const data = await this.execute(directive)

      // should break for, it may cause a big recursion
      if (data) {
        switch (data.action) {
          case 'change-branch':
            this.run(data.payload)
            break
          case 'change-stage':
            this.stage = new this.stages[data.payload]()
            this.run()
            break
        }
      }
    }
  }

  async execute (directive) {
    return new Promise((resolve) => {
      //console.log('executing directive', directive)

      switch (directive.type) {

        case 'print':
          this.events.emit('print', directive.payload)
          resolve()
          break

        case 'append':
          this.events.emit('append', directive.payload)
          resolve()
          break

        case 'sleep':
          const timeout = directive.payload * 1000

          setTimeout(() => {
            resolve()
          }, timeout)
          break

        case 'wait-for-input':
          this.events.emit('choice', ['{center}...{/center}'], () => {
            resolve()
          })
          break

        case 'dialogue-choice':
          const options = directive.payload
          this.events.emit('choice', options, answer => {
            this.answer = answer
            resolve()
          })
          break

        case 'branch':
          const branches = directive.payload
          resolve({
            action: 'change-branch',
            payload: branches[this.answer]
          })
          break

        case 'stage':
          const stage = directive.payload
          resolve({
            action: 'change-stage',
            payload: stage
          })
          break

        case 'animation':
          const animation = new Animation(directive.payload)
          resolve()
      }
    })
  }
}
