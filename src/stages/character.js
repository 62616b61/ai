import {
  Print, Append, Sleep, Animation, Act
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'test'
    this.layout = 'character'

    this.storyline = {

      test: [
        Animation('AIIdle', 'AICharacter'),
        Append('HELLO'),
        Sleep(2),
      ]
   }
  }
}
