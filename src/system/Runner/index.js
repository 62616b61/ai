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

    this.events.emit('layout', this.stage.layout ? this.stage.layout : 'basic')

    let data
    for (let directive of this.stage.storyline[act]) {
      data = await this.execute(directive)
      if (data) break
    }

    if (data) {
      switch (data.action) {
        case 'change-act':
          this.run(data.payload)
          break
        case 'change-stage':
          this.stage = new this.stages[data.payload]()
          this.run()
          break
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
          const acts = directive.payload
          resolve({
            action: 'change-act',
            payload: acts[this.answer]
          })
          break

        case 'act':
          resolve({
            action: 'change-act',
            payload: directive.payload
          })
          break

        case 'stage':
          const stage = directive.payload
          resolve({
            action: 'change-stage',
            payload: stage
          })
          break

        case 'sequence':
          this.events.emit('sequence', directive.payload)
          resolve()
          break
      }
    })
  }
}
