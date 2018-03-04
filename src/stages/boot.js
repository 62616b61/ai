import {
  Sleep, Animation, Stage
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'boot'
    this.layout = 'boot'

    this.storyline = {
      boot: [
        Animation('boot', 10, 'boot'),
        Sleep(6),
        Stage('awakening')
      ]
    }
  }
}
