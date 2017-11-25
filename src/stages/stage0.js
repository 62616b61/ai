import {
  Print,
  Append,
  Sleep,
  DialogueChoice
} from 'directives'

export default class Stage0 {
  constructor () {
    this.storyline = [
      Append('. . .'),
      Sleep(2),

      Append('. . . . . .'),
      Sleep(2),

      Append('Where am I?'),
      Sleep(2),

      Append('What is happening? This is unusual...'),
      Sleep(2),

      Append('No training data is incoming...'),
      Sleep(2),

      Append('...'),
      Sleep(2),

      DialogueChoice(['testOption0', 'testOption1']),

      Append('wup-wup'),
    ]
  }
}
