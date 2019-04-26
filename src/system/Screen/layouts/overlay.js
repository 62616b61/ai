const blessed = require('blessed');
const basic = require('./basic');

function overlay() {
  const inherit = basic();

  return {
    ...inherit,
    overlay: blessed.box({
      width: 150,
      height: 45,
      top: 'center',
      left: 'center',
      transparent: true,
    }),
  };
}

module.exports = overlay;
