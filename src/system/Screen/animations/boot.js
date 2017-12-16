const width = 8
const height = 10
const animation = []

let buffer = ''
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    buffer = buffer + ' .'
    animation.push(buffer)
  }

  buffer = buffer + '\n'
  animation.push(buffer)
}

export default [
  ...animation,
  ...animation.reverse()
]
