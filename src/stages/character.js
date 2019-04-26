const {
  Append, Sleep, Animation,
} = require('../directives');

class Character {
  constructor() {
    this.initialAct = 'test';
    this.layout = 'character';

    this.storyline = {
      test: [
        Animation('AIIdle', 'AICharacter'),
        Append('HELLO'),
        Sleep(2),
      ],
    };
  }
}

module.exports = Character;
