export default {
  'AICharacter': {
    top: 1,
    left: 'center',
    width: 30,
    height: 15,
    tags: true
  },

  'AISpeech': {
    top: 16,
    left: 'center',
    width: 50,
    height: 15,
    tags: true
  },

  'EvilAISpeech': {
    width: 35,
    height: 4,
    bottom: 4,
    right: -17,
    border: {
      type: 'line'
    },
    style: {
      fg: 'white',
      border: {
        fg: '#f0f0f0'
      }
    }
  },

  'DialogueOptions': {
    bottom: 3,
    left: 'center',
    width: 50,
    height: 10,
    keys: true,
    tags: true,
    style: {
      selected: {
        bg: 'magenta'
      }
    }
  }
}
