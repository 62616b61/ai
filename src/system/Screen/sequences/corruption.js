const possible = '?,@#$%&*[]/><|}{ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const pickRandom = () => possible[Math.floor(Math.random() * possible.length)]

function showMonster (layout) {
  let parts = [
    'mouth-1',
    'mouth-2',
    'mouth-3',
    'mouth-4',
    'mouth-5',
    'third-eye',
    'left-eye-1',
    'left-eye-2',
    'left-eye-3',
    'left-eye-upper-1',
    'left-eye-upper-2',
    'right-eye-1',
    'right-eye-2',
    'right-eye-3',
    'right-eye-upper-1',
    'right-eye-upper-2'
  ]

  parts = parts.reduce((acc, curr) => {
    acc[curr] = {
      width: layout[curr].width,
      height: layout[curr].height,
    }

    return acc
  }, {})

  Object.keys(parts).forEach(part => {
    layout[part].height = 1
    layout[part].show()

    const heightInterval = setInterval(() => {
      if (layout[part].height !== parts[part].height) layout[part].height ++
      else clearInterval(heightInterval)
    }, 350)

  })

  setTimeout(() => {
    layout['EvilAISpeech'].show()
  }, 5000)
}

export default function (screen, layout) {
  layout['EvilAISpeech'].hide()
  layout['EvilAISpeech'].setIndex(1000)

  let multiplier = 7
  let hasCorrupted = false

  const overlay = layout['overlay']

  const width = overlay.width
  const height = overlay.height

  let x = 0
  let y = 0

  let accumulator = ''

  const ln = Math.ceil((width * height)/(50 * multiplier))
  const interval = setInterval(() => {
    const str = Array.from({
      length: width - x > 10 ? ln : 1
    }, pickRandom).join('')

    accumulator += str

    if (hasCorrupted) {
      overlay.setLine(y, accumulator)
      overlay.setLine(y + 1, accumulator.split( '' ).reverse( ).join( '' ))
    } else {
      overlay.setLine(y, accumulator)
    }

    screen.render()

    x = x + str.length
    if (x >= width) {
      accumulator = ''
      x = 0
      y = hasCorrupted ? y + 2 : y + 1
    }
    if (y >= height) {
      if (!hasCorrupted) showMonster(layout)

      //clearInterval(interval)
      y = 0
      multiplier = 1
      hasCorrupted = true
    }
  })
}
