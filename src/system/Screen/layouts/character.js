const common = require('./common');

function character() {
  const inherit = common();

  return {
    AICharacter: inherit.AICharacter,
    AISpeech: inherit.AISpeech,
    DialogueOptions: inherit.DialogueOptions,
  };
}

module.exports = character;
