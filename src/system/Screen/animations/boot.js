const width = 8;
const height = 10;
const animation = [];

let buffer = '';
for (let i = 0; i < height; i += 1) {
  for (let j = 0; j < width; j += 1) {
    buffer += ' .';
    animation.push(buffer);
  }

  buffer += '\n';
  animation.push(buffer);
}

module.exports = [
  ...animation,
  ...animation.reverse(),
];
