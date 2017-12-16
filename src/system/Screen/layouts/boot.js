import blessed from 'blessed'

export default function () {
  return {
    'boot': blessed.box({
      top: 'center',
      left: 'center',
      width: 10,
      height: 15,
      tags: true
    })
  }
}
