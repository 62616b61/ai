const blessed = require('blessed');

const layouts = require('./layouts');
const sequences = require('./sequences');
const animations = require('./animations');

const typewriter = require('./utils/typewriter');
const Animator = require('./animations/animator');

const TYPEWRITE_SPEED = 80;

class Screen {
  constructor(events) {
    this.events = events;

    this.animations = [];

    this.setup();
    this.subscribe();
  }

  setup() {
    this.screen = blessed.screen({
      smartCSR: true,
      terminal: 'linux',
    });

    this.screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

    this.wrapper = blessed.box({
      top: 'center',
      left: 'center',
      width: 100,
      height: 42,
      tags: true,
    });

    this.screen.append(this.wrapper);
  }

  reset() {
    this.animations.forEach(animation => animation.stop());
    this.animations = [];
  }

  print(text, box, callback) {
    const b = this.layout[box || 'AISpeech'];

    typewriter(
      text,
      TYPEWRITE_SPEED,
      (t) => {
        b.setContent(t);
        this.screen.render();
      },
      () => callback(),
    );
  }

  append(text, box, callback) {
    const b = this.layout[box || 'AISpeech'];
    const lines = b.getLines();

    typewriter(
      text,
      TYPEWRITE_SPEED,
      (t) => {
        b.setLine(lines.length, t);
        this.screen.render();
      },
      () => callback(),
    );
  }

  choice(items, callback) {
    const list = this.layout.DialogueOptions;
    const findIndex = content => items.findIndex(item => item === content);

    items.forEach(item => list.add(item));

    list.show();
    list.focus();

    list.on('select', (answer) => {
      list.clearItems();
      callback(findIndex(answer.content));
    });

    this.screen.render();
  }

  applyLayout(layout) {
    // remove all existing nodes
    if (this.layout) {
      Object.keys(this.layout).forEach(box => this.wrapper.remove(this.layout[box]));
    }

    this.layout = layouts[layout]();

    Object.keys(this.layout).forEach(box => this.wrapper.append(this.layout[box]));

    this.screen.render();
  }

  startSequence(sequence) {
    if (sequences[sequence]) sequences[sequence](this.screen, this.layout);
    else throw new Error('Unknown sequence!');
  }

  startAnimation(animation, time, box) {
    const animator = new Animator(animations[animation], time, (sprite) => {
      this.layout[box].setContent(sprite);
      this.screen.render();
    });

    this.animations.push(animator);
  }

  subscribe() {
    const e = this.events;

    e.on('reset', () => this.reset());

    e.on('print', (t, b, c) => this.print(t, b, c));
    e.on('append', (t, b, c) => this.append(t, b, c));
    e.on('choice', (items, callback) => this.choice(items, callback));
    e.on('layout', layout => this.applyLayout(layout));
    e.on('sequence', s => this.startSequence(s));
    e.on('animation', (a, t, b) => this.startAnimation(a, t, b));
  }
}

module.exports = Screen;
