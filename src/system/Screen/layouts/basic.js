const common = require('./common');

function basic() {
  const inherit = common();

  return {
    AISpeech: inherit.AISpeech,
    DialogueOptions: inherit.DialogueOptions,
  };
}

module.exports = basic;
