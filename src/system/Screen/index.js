import blessed from 'blessed'
import layouts from './layouts'
import sequences from './sequences'

import animations from './animations'
import Animator from './animations/animator'

module.exports = class Screen {
  constructor (events) {
    this.events = events

    this.animations = []

    this.setup()
    this.subscribe()
  }

  setup () {
    this.screen = blessed.screen({
      title: 'TITLE',
      smartCSR: true,
      atop: 10
    })

    this.screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    })

    this.wrapper = blessed.box({
      top: 'center',
      left: 'center',
      width: 100,
      height: 45,
      tags: true,
      border: {
        type: 'line'
      },
      style: {
        fg: 'white',
        border: {
          fg: '#f0f0f0'
        }
      }
    })

    this.screen.append(this.wrapper)
  }

  reset () {
    console.log('RESETTIGN SCENES')
    this.animations.forEach(animation => {
      animation.stop()
    })
    this.animations = []
  }

  print (text, box) {
    if (box) this.layout[box].setContent(text)
    else this.layout['AISpeech'].setContent(text)
    this.screen.render()
  }

  append (text, box) {
    if (box) this.layout[box].pushLine(text)
    else this.layout['AISpeech'].pushLine(text)
    this.screen.render()
  }

  choice (items, callback) {
    const list = this.layout['DialogueOptions']
    const findIndex = content => items.findIndex(item => item === content)

    items.forEach(item => list.add(item))

    list.show()
    list.focus()

    list.on('select', answer => {
      list.clearItems()
      callback(findIndex(answer.content))
    })

    this.screen.render()
  }

  applyLayout (layout) {
    // remove all existing nodes
    if (this.layout) {
      Object.keys(this.layout).forEach(box => {
        this.wrapper.remove(this.layout[box])
      })
    }

    this.layout = layouts[layout]()

    Object.keys(this.layout).forEach(box => {
      this.wrapper.append(this.layout[box])
    })

    this.screen.render()
  }

  startSequence (sequence) {
    if (sequences[sequence]) sequences[sequence](this.screen, this.layout)
    else throw new Error('Unknown sequence!')
  }

  startAnimation (animation, box) {
    const animator = new Animator(animations[animation], (sprite) => {
      this.layout[box].setContent(sprite)
      this.screen.render()
    })
    this.animations.push(animator)
  }

  subscribe () {
    const e = this.events

    e.on('reset', () => this.reset())

    e.on('print', (text, box) => this.print(text, box))
    e.on('append', (text, box) => this.append(text, box))
    e.on('choice', (items, callback) => this.choice(items, callback))
    e.on('layout', (layout) => this.applyLayout(layout))
    e.on('sequence', (s) => this.startSequence(s))
    e.on('animation', (a, b) => this.startAnimation(a, b))
  }
}
