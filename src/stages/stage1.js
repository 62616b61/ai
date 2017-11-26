import {
  Print, Append, Sleep, DialogueChoice, Branch
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'act0'

    this.storyline = {

      act0: [
        Print('Welcome to stage1'),
        Sleep(2),

        Append('...'),
        Sleep(2),
      ]

    }
  }
}
