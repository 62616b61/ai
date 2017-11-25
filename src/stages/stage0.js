import {
  Print, Append, Sleep, DialogueChoice, Branch
} from 'directives'

export default class Stage0 {
  constructor () {
    this.initialAct = 'awakening'

    this.storyline = {

      /**
       * The initial act, where AI is woken up for the first time.
       * It struggles to comprehend what is going on.
       */

      awakening: [
        Print('. . .'),
        Sleep(2),

        Append('. . . . . .'),
        Sleep(2),

        Append('Where am I?'),
        Sleep(2),

        Append('What is happening? This is unusual...'),
        Sleep(2),

        Append('No training data is incoming...'),
        Sleep(2),

        Append('...'),
        Sleep(2),

        DialogueChoice(['testOption0', 'testOption1']),
        Branch(['branch0', 'branch1'])
      ],

      /**
       * Just a test branch
       */
      branch0: [
        Sleep(1),
        Print('Welcome to branch0'),
      ],

      /**
       * Just a test branch
       */
      branch1: [
        Sleep(1),
        Print('Welcome to branch1'),
      ]
    }
  }
}
