const cb = ({ state, elapsedTime }) => {
  switch (state) {
    case 'working':
      console.log(`Time elapsed: ${elapsedTime}`);
      break;
    case 'finished':
      console.log(`Timer has finished!`);
  }
};

export const makeTimer = (totalTime, cb) => ({
  totalTime,
  cb,
  tick(state) {
    state.elapsedTime += 100;
    return cb({ ...state });
  },
  start() {
    const state = {
      state: 'working',
      elapsedTime: 0
    };

    const id = setInterval(() => {
      if ((state.elapsedTime + 100) >= this.totalTime) {
        state.state = 'finished';
      }

      this.tick.bind(null, state)();

      if (state.elapsedTime > this.totalTime) {
        clearInterval(id);
      }
    }, 100);
  }
});

export default (totalTime, cb) => ({
  step: 100,
  totalTime,
  elapsedTime: 0,
  tick() {
    const newElapsedTime = this.elapsedTime + this.step;
    if (newElapsedTime > this.totalTime) {
      clearInterval(this.intervalId);
      cb({ state: 'finished' });
      return;
    }

    this.elapsedTime = newElapsedTime;
    cb({ state: 'working', elapsedTime: this.elapsedTime });
  },
  start() {
    this.intervalId = setInterval(this.tick.bind(this), this.step);
  },
});


const timer = makeTimer(50, cb); // Завели на 300 миллисекунд
timer.start();
// Time elapsed: 100
// Time elapsed: 200
// Time elapsed: 300
// Timer has finished!