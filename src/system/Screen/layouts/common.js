const blessed = require('blessed');

function common() {
  return {
    AICharacter: blessed.box({
      top: 1,
      left: 'center',
      width: 30,
      height: 15,
      tags: true,
    }),

    AISpeech: blessed.box({
      top: 16,
      left: 'center',
      width: 50,
      height: 15,
      tags: true,
    }),

    EvilAISpeech: blessed.box({
      width: 35,
      height: 4,
      bottom: 4,
      right: -17,
      border: {
        type: 'line',
      },
      style: {
        fg: 'white',
        border: {
          fg: '#f0f0f0',
        },
      },
    }),

    DialogueOptions: blessed.list({
      bottom: 3,
      left: 'center',
      width: 50,
      height: 10,
      keys: true,
      tags: true,
      style: {
        selected: {
          bg: 'magenta',
        },
      },
    }),
  };
}

module.exports = common;
