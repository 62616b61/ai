const blessed = require('blessed')

module.exports = class Screen {
  constructor (events) {
    this.events = events


    this.setup()
    this.subscribe()
  }

  setup () {
    this.screen = blessed.screen({
      title: 'TITLE',
      smartCSR: true
    })

    this.screen.key(['escape', 'q', 'C-c'], function(ch, key) {
      return process.exit(0);
    })

    this.box = blessed.box({
      top: 'center',
      left: 'center',
      width: '50%',
      height: '50%',
      tags: true,
      style: {
        fg: 'white',
        border: {
          fg: '#f0f0f0'
        }
      }
    })

    this.list = blessed.list({
      bottom: 2,
      left: 'center',
      width: '60%',
      height: '20%',
      keys: true,
      style: {
        fg: 'white',
        selected: {
          bg: 'magenta'
        }
      }
    })

    this.screen.append(this.box)
    this.screen.append(this.list)

    this.list.hide()

    this.screen.render()
  }

  print (text) {
    this.box.setContent(text)
    this.screen.render()
  }

  append (text) {
    this.box.pushLine(text)
    this.screen.render()
  }

  choice (items, callback) {
    const findIndex = content => items.findIndex(item => item === content)

    items.forEach(item => this.list.add(item))

    this.list.show()
    this.list.focus()

    this.list.on('select', answer => {
      this.list.hide()
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
  }
}
