const render = (state, element) => {
  const elementName = element.dataset.editableTarget;
  element.innerHTML = '';

  const buildText = () => {
    if (state.value === '') {
      const i = document.createElement('i');
      i.textContent = elementName;
      return i;
    }

    return document.createTextNode(state.value);
  };

  const buildForm = () => {
    const formEl = document.createElement('form');

    const labelEl = document.createElement('label');
    labelEl.classList.add('sr-only');
    labelEl.setAttribute('for', elementName);
    labelEl.textContent = elementName;

    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('name', elementName);
    inputEl.setAttribute('id', elementName);
    inputEl.setAttribute('value', state.value);

    const submitEl = document.createElement('input');
    submitEl.setAttribute('type', 'submit');
    submitEl.setAttribute('value', `Save ${elementName}`);

    formEl.append(labelEl, inputEl, submitEl);

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const value = formData.get(elementName).trim();
      state.value = value;
      state.mode = 'text';
      render(state, element);

    });

    return { formEl, inputEl};
  };

  switch (state.mode) {
    case 'text': {
      const text = buildText();
      element.append(text);
      break;
    }
    case 'form': {
      const { formEl, inputEl } = buildForm();
      element.append(formEl);
      inputEl.select();
      break;
    }
    default:
      throw new Error(`Unknown mode: ${state.mode}`);
  }
};

export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };

    element.addEventListener('click', () => {
      if (state.mode === 'text') {
        state.mode = 'form';
        render(state, element);
      }
    });
  });
};