const {
  Stage,
} = require('../directives');

class Stage0 {
  constructor() {
    this.initialAct = 'act0';

    this.storyline = {
      act0: [
        Stage('boot'),
      ],
    };
  }
}

module.exports = Stage0;
