import blessed from 'blessed'
import basic from './basic'

export default function () {
  const inherit = basic()

  return {
    ...inherit,
    'overlay': blessed.box({
      width: 150,
      height: 45,
      top: 'center',
      left: 'center',
      transparent: true
    })

  }
}
