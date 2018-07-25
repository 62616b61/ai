import common from './common'

export default function () {
  const inherit = common()

  return {
    'AISpeech': inherit['AISpeech'],
    'DialogueOptions': inherit['DialogueOptions']
  }
}
