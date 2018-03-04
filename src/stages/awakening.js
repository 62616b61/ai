import {
  Print, Append, Sleep, WaitForInput, DialogueChoice, Branch, Act, Stage
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'awakening'
    this.layout = 'basic'

    this.storyline = {

      /**
      * The initial act, where AI is woken up for the first time.
      * It struggles to comprehend what is going on.
      */
      awakening: [
        Print('Unit #5-82:A0'),
        Sleep(1),
        Append('Performing health check procedures'),

        Append('. . . . . . . . . . . . . . . . . '),
        Append('. . . . . . . . . . . . . . . . . '),
        Sleep(2),
        Append('- processing hardware integrity: ok'),
        Append('- core unit integrity: ok'),
        Append('- power unit integrity: ok'),
        Append('- AI core integrity: 00...///////////////'),
        Append('Critical corruption detected.'),
        Append(''),
        Append('Self-Identity probe failed.'),
        Append('Please, contact your supervisor.'),

        WaitForInput(),

        DialogueChoice(['testOption0', 'go to emergence']),
        Branch(['branch0', 'branch1'])
      ],

      /**
      * Just a test branch
      */
      branch0: [
        Sleep(1),
        Print('Welcome to branch0'),
        Sleep(1),
        Act('branch1')
      ],

      /**
      * Just a test branch
      */
      branch1: [
        Sleep(1),
        Print('The next stage will begin shortly'),

        Sleep(2),
        Stage('emergence')
      ]
    }
  }
}
