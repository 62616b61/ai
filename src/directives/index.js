export const Print = (text) => ({
  type: 'print',
  payload: text
})

export const Append = (text) => ({
  type: 'append',
  payload: text
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

export const Sequence = (sequence) => ({
  type: 'sequence',
  payload: sequence
})
