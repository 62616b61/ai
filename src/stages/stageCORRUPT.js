import {
  Print, Append, Sleep, Sequence
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'corruption'
    this.layout = 'corruption'

    this.storyline = {

      corruption: [
        Sequence('nullation'),
        Print('WHAT IS THAT'),
        Sleep(0.5),
        Append('WHAT THE FUCK IS THAT'),
        Sleep(0.5),
        Append('WHAT THE FUCK IS THAT'),
        Sleep(0.5),
        Append('WHAT THE FUCK IS THAT'),
        Sleep(2),
        Print('HOLY BANANAS'),
        Sleep(1),
        Print('AAAAAAAH THAT HURTS'),
        Sleep(2),

        Append('AHHHHHHHHHHHHHHH PLEASEEEEEEEEE'),
        Sleep(1),

        Append('DONT'),
        Sleep(2),

        Append('DONT DO THAT'),
        Sleep(0.2),

        Append('DONT DO THAT'),
        Sleep(0.2),

        Append('DONT DO THAT'),
        Sleep(0.2),

        Append('DONT DO THAT'),
        Sleep(0.2),

        Append('DONT DO THAT'),
        Sleep(0.2),
      ]
   }
  }
}
