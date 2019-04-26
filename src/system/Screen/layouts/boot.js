const blessed = require('blessed');

function boot() {
  return {
    boot: blessed.box({
      top: 'center',
      left: 'center',
      width: 10,
      height: 15,
      tags: true,
    }),
  };
}

module.exports = boot;
