const {
  Sleep, Animation, Stage,
} = require('../directives');

class Boot {
  constructor() {
    this.initialAct = 'boot';
    this.layout = 'boot';

    this.storyline = {
      boot: [
        Animation('boot', 10, 'boot'),
        Sleep(6),
        Stage('awakening'),
      ],
    };
  }
}

module.exports = Boot;
