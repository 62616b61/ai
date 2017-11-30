export default class Sequences {
  constructor (screen) {
    this.screen = screen
  }

  setLayout (layout) {
    this.layout = layout
  }

  begin (sequence) {
    switch (sequence) {
      case 'corruption':
        this.corruption()
        break
      case 'nullation':
        this.nullation()
        break
      default:
        throw new Error('Unknown sequence!')
    }
  }

  corruption () {
    const possible = '?,@#$%&*[]/><|}{' +
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz' +
      '0123456789'
    const pickRandom = () => possible[Math.floor(Math.random() * possible.length)]
    const overlay = this.layout['overlay']

    const width = overlay.width
    const height = overlay.height

    let x = 0
    let y = 0

    let accumulator = ''

    const ln = Math.ceil((width * height)/7500)

    const interval = setInterval(() => {
      const str = Array.from({
        length: width - x > 10 ? ln : 1
      }, pickRandom).join('')
      accumulator += str

      overlay.setLine(y, accumulator)
      this.screen.render()

      x = x + str.length
      if (x >= width) {
        accumulator = ''
        x = 0
        y++
      }
      if (y >= height) {
        clearInterval(interval)
      }
    })
  }

  nullation () {
    const overlay = this.layout['overlay']

    const width = overlay.width
    const height = overlay.height

    let x = 0
    let y = 0

    let accumulator = ''

    const ln = Math.ceil((width * height)/7500)

    const interval = setInterval(() => {
      const str = Array.from({
        length: width - x > 10 ? ln : 1
      }, () => '0').join('')
      accumulator += str

      overlay.setLine(y, accumulator)
      this.screen.render()

      x = x + str.length
      if (x >= width) {
        accumulator = ''
        x = 0
        y++
      }
      if (y >= height) {
        clearInterval(interval)
      }
    })
  }

}
