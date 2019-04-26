const blessed = require('blessed');
const common = require('./common');

function emergence() {
  const inherit = common();

  return {
    ...inherit,
    overlay: blessed.box({
      width: 150,
      height: 42,
      top: 'center',
      left: 'center',
      transparent: true,
    }),

    /**
     * THIRD EYE
     */
    'third-eye': blessed.box({
      bg: 'white',
      hidden: true,
      width: 16,
      height: 12,
      top: 1,
      left: 'center',
    }),

    /**
     * LEFT EYE
     */
    'left-eye-1': blessed.box({
      bg: 'white',
      hidden: true,
      width: 16,
      height: 12,
      top: 17,
      left: 10,
    }),
    'left-eye-2': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 12,
      top: 13,
      left: 2,
    }),
    'left-eye-3': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      top: 21,
      left: 26,
    }),

    'left-eye-upper-1': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      top: 9,
      left: 18,
    }),
    'left-eye-upper-2': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 8,
      top: 5,
      left: 10,
    }),

    /**
     * RIGHT EYE
     */
    'right-eye-1': blessed.box({
      bg: 'white',
      hidden: true,
      width: 16,
      height: 12,
      top: 17,
      right: 10,
    }),
    'right-eye-2': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 12,
      top: 13,
      right: 2,
    }),
    'right-eye-3': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      top: 21,
      right: 26,
    }),

    'right-eye-upper-1': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      top: 9,
      right: 18,
    }),
    'right-eye-upper-2': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 8,
      top: 5,
      right: 10,
    }),


    /**
     * MOUTH
     */

    'mouth-1': blessed.box({
      bg: 'white',
      hidden: true,
      width: 16,
      height: 4,
      bottom: 6,
      left: 'center',
    }),
    'mouth-2': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      bottom: 2,
      left: 34,
    }),
    'mouth-3': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      bottom: 2,
      right: 34,
    }),
    'mouth-4': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      bottom: 6,
      left: 26,
    }),
    'mouth-5': blessed.box({
      bg: 'white',
      hidden: true,
      width: 8,
      height: 4,
      bottom: 6,
      right: 26,
    }),
  };
}

module.exports = emergence;
