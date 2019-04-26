const { exec } = require('child_process');
const fs = require('fs');

class Runner {
  constructor(events, stages) {
    this.events = events;
    this.stages = stages;
    this.stage = null;

    this.run();
  }

  async run(incomingAct) {
    let act = incomingAct;

    if (!this.stage) this.stage = new this.stages.stage0();
    if (!act) act = this.stage.initialAct;

    this.events.emit('reset');
    this.events.emit('layout', this.stage.layout ? this.stage.layout : 'basic');

    let data;
    // eslint-disable-next-line
    for (let directive of this.stage.storyline[act]) {
      // eslint-disable-next-line
      data = await this.execute(directive);
      if (data) break;
    }

    if (data) {
      switch (data.action) {
        case 'change-act':
          this.run(data.payload);
          break;

        case 'change-stage':
          this.stage = new this.stages[data.payload]();
          this.run();
          break;

        default:
          throw new Error('Unknown action');
      }
    }
  }

  async execute(directive) {
    return new Promise((resolve) => {
      switch (directive.type) {
        case 'print':
          this.events.emit(
            'print',
            directive.payload.text,
            directive.payload.box,
            () => resolve(),
          );
          break;

        case 'append':
          this.events.emit(
            'append',
            directive.payload.text,
            directive.payload.box,
            () => resolve(),
          );
          break;

        case 'sleep':
          const timeout = directive.payload * 1000;

          setTimeout(() => resolve(), timeout);
          break;

        case 'wait-for-input':
          this.events.emit('choice', ['{center}...{/center}'], () => resolve());
          break;

        case 'dialogue-choice':
          const options = directive.payload;
          this.events.emit('choice', options, (answer) => {
            this.answer = answer;
            resolve();
          });
          break;

        case 'branch':
          const acts = directive.payload;
          resolve({
            action: 'change-act',
            payload: acts[this.answer],
          });
          break;

        case 'act':
          resolve({
            action: 'change-act',
            payload: directive.payload,
          });
          break;

        case 'stage':
          const stage = directive.payload;
          resolve({
            action: 'change-stage',
            payload: stage,
          });
          break;

        case 'save':
          fs.writeFile(
            'save.json',
            JSON.stringify({ save: 'test' }),
            'utf8',
            () => resolve(),
          );
          break;

        case 'sequence':
          this.events.emit('sequence', directive.payload);
          resolve();
          break;

        case 'animation':
          const {animation, time, box} = directive.payload;
          this.events.emit('animation', animation, time, box);
          resolve();
          break;

        case 'reboot':
          exec('shutdown -r now');
          resolve();
          break;

        default:
          throw new Error('Unknwon directive type');
      }
    });
  }
}

module.exports = Runner;
