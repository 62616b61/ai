export const Print = (text, box) => ({
  type: 'print',
  payload: { text, box }
})

export const Append = (text, box) => ({
  type: 'append',
  payload: { text, box }
})

export const Sleep = (seconds) => ({
  type: 'sleep',
  payload: seconds
})

export const WaitForInput = () => ({
  type: 'wait-for-input'
})

export const DialogueChoice = (items) => ({
  type: 'dialogue-choice',
  payload: items
})

export const Branch = (branches) => ({
  type: 'branch',
  payload: branches
})

export const Act = (act) => ({
  type: 'act',
  payload: act
})

export const Stage = (stage) => ({
  type: 'stage',
  payload: stage
})

export const Save = () => ({
  type: 'save'
})

export const Sequence = (sequence) => ({
  type: 'sequence',
  payload: sequence
})

export const Animation = (animation, time, box) => ({
  type: 'animation',
  payload: { animation, time, box }
})

export const Reboot = () => ({
  type: 'reboot'
})
