import blessed from 'blessed'
import common from './common'

export default function () {
  const inherit = common()

  return {
    'AICharacter': inherit['AICharacter'],
    'AISpeech': inherit['AISpeech'],
    'DialogueOptions': inherit['DialogueOptions']
  }
}
