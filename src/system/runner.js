export default class Runner {
  constructor (events, stages) {
    this.events = events
    this.stages = stages
    this.stage = null

    this.run()
  }

  async run () {
    if (!this.stage) this.stage = new this.stages[0]()

    const initialAct = this.stage.initialAct
    for (let directive of this.stage.storyline[initialAct]) {
      await this.execute(directive)
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

        case 'dialogue-choice':
          const options = directive.payload
          this.events.emit('choice', options, answer => {
            this.answer = answer
            console.log('you have chosen ', this.answer)
            resolve()
          })
          break

      }
    })
  }
}
