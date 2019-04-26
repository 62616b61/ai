const {
  Print, Append, Sleep, Sequence,
} = require('../directives');

class Nullation {
  constructor() {
    this.initialAct = 'nullation';
    this.layout = 'overlay';

    this.storyline = {
      nullation: [
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
      ],
    };
  }
}

module.exports = Nullation;
