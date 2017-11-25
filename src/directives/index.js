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
