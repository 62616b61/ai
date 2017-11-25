import EventEmitter from 'events'

import stages from './stages'
import Runner from './system/runner'
import Screen from './system/screen'

export default class App {
  constructor () {
    this.events = new EventEmitter()

    this.screen = new Screen(this.events)
    this.runner = new Runner(this.events, stages)

  }
}

new App()
