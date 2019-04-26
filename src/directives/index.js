const Print = (text, box) => ({
  type: 'print',
  payload: { text, box },
});

const Append = (text, box) => ({
  type: 'append',
  payload: { text, box },
});

const Sleep = seconds => ({
  type: 'sleep',
  payload: seconds,
});

const WaitForInput = () => ({
  type: 'wait-for-input',
});

const DialogueChoice = items => ({
  type: 'dialogue-choice',
  payload: items,
});

const Branch = branches => ({
  type: 'branch',
  payload: branches,
});

const Act = act => ({
  type: 'act',
  payload: act,
});

const Stage = stage => ({
  type: 'stage',
  payload: stage,
});

const Save = () => ({
  type: 'save',
});

const Sequence = sequence => ({
  type: 'sequence',
  payload: sequence,
});

const Animation = (animation, time, box) => ({
  type: 'animation',
  payload: { animation, time, box },
});

const Reboot = () => ({
  type: 'reboot',
});

module.exports = {
  Print,
  Append,
  Sleep,
  WaitForInput,
  DialogueChoice,
  Branch,
  Act,
  Stage,
  Save,
  Sequence,
  Animation,
  Reboot,
};
