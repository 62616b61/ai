const characters = '?,@#$%&*[]/><|}{ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const pickRandomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

function showMonster(incomingLayout) {
  const layout = incomingLayout;

  let parts = [
    'mouth-1',
    'mouth-2',
    'mouth-3',
    'mouth-4',
    'mouth-5',
    'third-eye',
    'left-eye-1',
    'left-eye-2',
    'left-eye-3',
    'left-eye-upper-1',
    'left-eye-upper-2',
    'right-eye-1',
    'right-eye-2',
    'right-eye-3',
    'right-eye-upper-1',
    'right-eye-upper-2',
  ];

  parts = parts.reduce((acc, curr) => {
    acc[curr] = {
      width: layout[curr].width,
      height: layout[curr].height,
    };

    return acc;
  }, {});

  Object.keys(parts).forEach((part) => {
    layout[part].height = 1;
    layout[part].show();

    const heightInterval = setInterval(() => {
      if (layout[part].height !== parts[part].height) layout[part].height += 1;
      else clearInterval(heightInterval);
    }, 250);
  });

  setTimeout(() => {
    layout.EvilAISpeech.show();
  }, 5000);
}

function corruption(screen, layout) {
  layout.EvilAISpeech.hide();
  layout.EvilAISpeech.setIndex(1000);

  let hasCorrupted = false;

  const { overlay } = layout;
  const { width, height } = overlay;

  const slowChunkLength = 15;
  const fastChunkLength = 75;

  // generate random chunks of text
  const slowChunks = [];
  const fastChunks = [];
  for (let i = 0; i < 6; i += 1) {
    const slowChunk = Array.from(
      { length: slowChunkLength },
      () => pickRandomFrom(characters),
    ).join('');

    const fastChunk = Array.from(
      { length: fastChunkLength },
      () => pickRandomFrom(characters),
    ).join('');

    slowChunks.push(slowChunk);
    fastChunks.push(fastChunk);
  }

  let accumulator = '';
  let x = 0;
  let y = 0;

  setInterval(() => {
    const chunks = hasCorrupted ? fastChunks : slowChunks;
    const chunk = pickRandomFrom(chunks);
    accumulator += chunk;

    overlay.setLine(y, accumulator);
    if (hasCorrupted) overlay.setLine(y + 1, accumulator);

    screen.render();

    x += chunk.length;
    if (x >= width) {
      accumulator = '';
      x = 0;
      y = hasCorrupted ? y + 2 : y + 1;
    }
    if (y >= height) {
      if (!hasCorrupted) showMonster(layout);

      y = 0;
      hasCorrupted = true;
    }
  }, 1);
}

module.exports = corruption;
