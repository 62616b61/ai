import blessed from 'blessed'

export default class Layouts {
  constructor () {
    const commonlyUsedBoxes = {
      'AICharacter': blessed.box({
        top: 1,
        left: 'center',
        width: 30,
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

      'AISpeech': blessed.box({
        top: 16,
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

      'DialogueOptions': blessed.list({
        bottom: 3,
        left: 'center',
        width: 50,
        height: 10,
        keys: true,
        tags: true,
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
    }

    this.layouts = {

      default: {
        'AISpeech': commonlyUsedBoxes['AISpeech'],
        'DialogueOptions': commonlyUsedBoxes['DialogueOptions']
      },

      corruption: {
        'AISpeech': commonlyUsedBoxes['AISpeech'],
        'DialogueOptions': commonlyUsedBoxes['DialogueOptions'],

        'overlay': blessed.box({
          width: 150,
          height: 45,
          top: 'center',
          left: 'center',
          transparent: true
        })
      },

      character: {
        'AICharacter': commonlyUsedBoxes['AICharacter'],
        'AISpeech': commonlyUsedBoxes['AISpeech'],
        'DialogueOptions': commonlyUsedBoxes['DialogueOptions']
      }
    }
  }

  get (layout) {
    return this.layouts[layout]
  }
}
