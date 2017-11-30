import blessed from 'blessed'
import Layouts from './layouts'

module.exports = class Screen {
  constructor (events) {
    this.events = events


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

    this.layouts = new Layouts()
  }

  applyLayout (layout) {
    this.layout = this.layouts.get(layout)
    console.log(Object.keys(this.layout))

    Object.keys(this.layout).forEach(box => {
      this.wrapper.append(this.layout[box])
    })

    this.screen.render()
  }

  print (text) {
    this.layout['AISpeech'].setContent(text)
    this.screen.render()
  }

  append (text) {
    this.layout['AISpeech'].pushLine(text)
    this.screen.render()
  }

  choice (items, callback) {
    const list = this.layout['DialogueOptions']
    const findIndex = content => items.findIndex(item => item === content)

    items.forEach(item => list.add(item))

    list.show()
    list.focus()

    list.on('select', answer => {
      list.hide()
      this.screen.render()

      callback(findIndex(answer.content))
    })

    this.screen.render()
  }

  subscribe () {
    const e = this.events

    e.on('print', text => this.print(text))
    e.on('append', text => this.append(text))
    e.on('choice', (items, callback) => this.choice(items, callback))
    e.on('layout', (layout) => this.applyLayout(layout))
  }
}
