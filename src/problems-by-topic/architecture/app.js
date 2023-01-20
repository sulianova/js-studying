const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

export default () => {
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input[type=number]');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};