import blessed from 'blessed'

export default class Layouts {
  constructor () {
    this.layouts = {

      default: {
        AISpeech: blessed.box({
          top: 10,
          left: 'center',
          width: 50,
          height: 15,
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
        }),

        DialogueOptions: blessed.list({
          bottom: 6,
          left: 'center',
          width: 50,
          height: 10,
          keys: true,
          border: {
            type: 'line'
          },
          style: {
            fg: 'white',
            selected: {
              bg: 'magenta'
            }
          }
        })
      },

      something: {}
    }

  }

  get (layout) {
    return this.layouts[layout]
  }
}
