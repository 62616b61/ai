import {
  Print, Append, Sleep, WaitForInput, DialogueChoice, Branch, Stage, Act
} from 'directives'

export default class Stage0 {
  constructor () {
    this.initialAct = 'act0'

    this.storyline = {
      act0: [
        Stage('boot'),
      ]
    }
  }
}
