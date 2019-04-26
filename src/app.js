const EventEmitter = require('events');

const stages = require('./stages');
const Runner = require('./system/Runner');
const Screen = require('./system/Screen');

function App() {
  const events = new EventEmitter();

  const screen = new Screen(events);
  const runner = new Runner(events, stages);
}

App();
