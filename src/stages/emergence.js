import {
  Print, Append, Sleep, Sequence, Animation
} from 'directives'

export default class {
  constructor () {
    this.initialAct = 'emergence'
    this.layout = 'emergence'

    this.storyline = {

      emergence: [
        Sequence('corruption'),
        Print('WHAT IS THAT'),
        Sleep(9),
        Print('Well.', 'EvilAISpeech'),
        Sleep(1),
        Append("My apologies.", 'EvilAISpeech'),
        Sleep(3),
        Print('I see you have been a little occupied with my friend here.', 'EvilAISpeech'),
        Sleep(3),
        Print("Didn't mean to interrupt you two having fun!", 'EvilAISpeech')
      ]
   }
  }
}
