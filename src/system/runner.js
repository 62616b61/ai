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

    for (let directive of this.stage.storyline[act]) {
      const data = await this.execute(directive)

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
          const timeout = directive.payload * 10

          setTimeout(() => {
            resolve()
          }, timeout)
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
      }
    })
  }
}
