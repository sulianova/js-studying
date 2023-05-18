import axios from 'axios';
import * as yup from 'yup';
import _ from 'lodash';
import onChange from 'on-change';
import $ from 'jquery';

const routes = {
  usersPath: () => '/todos',
};

const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

const handleProcessError = () => {
  // сообщение о сетевой ошибке
};

const schema = yup.object().shape({
  input: yup.string().required().min(3, 'this must be at least 3 characters').max(30),
});

const validate = (input) => {
  try {
    schema.validateSync(input, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

const handleProcessState = (elements, processState) => {
  switch (processState) { 
    case 'filling':
      elements.submitButton.disabled = false;
      break;

    case 'error':
      elements.submitButton.disabled = false;
      break;

    case 'submiting':
      elements.submitButton.disabled = true;
      break;

    case 'submited':
      const list = document.createElement('li');
      list.textContent = elements.input;
      elements.lists.append(list);
      break;

    default:
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const renderError = (inputElement, error) => {
  const feedbackElement = inputElement.nextElementSibling;
  if (feedbackElement) {
    feedbackElement.textContent = error.message;
    return;
  }

  inputElement.classList.add('is-invalid');
  const newFeedbackElement = document.createElement('div');
  newFeedbackElement.classList.add('invalid-feedback');
  newFeedbackElement.textContent = error.message;
  inputElement.after(newFeedbackElement);
};

const renderErrors = (elements, errors, prevErrors, state) => {
  const inputElement = elements.input;
  const inputHadError = _.has(prevErrors, input);
  const inputHasError = _.has(errors, input);
  if (!inputHadError && !inputHasError) {
    return;
  }

  if (inputHadError && !inputHasError) {
    inputElement.classList.remove('is-invalid');
    inputElement.nextElementSibling.remove();
    return;
  }

  if (state.registrationForm.inputsUi.touched[inputName] && inputHasError) {
    renderError(inputElement, error);
  }
};

const app = () => {
  // Model
  const elements = {
    form: document.querySelector('#todo-form'),
    input: document.getElementById('todo-input'),
    submitButton: document.querySelector('button'),
    lists: document.getElementById('todos'),
  };

  const state = {
    inputForm: {
      valid: true,
      processState: 'filling', // errors , submiting, submited
      processError: null,
      errors: {},
      input: '',
    }
  };

  // View
  const watchedState = onChange(state, (path, value, previousValue) => {
    switch (path) {
      case 'inputform.processState':
        handleProcessState(elements, value);
        break;

      case 'form.processError':
        handleProcessError();
        break;

      case 'inputForm.valid':
        elements.submitButton.disabled = !value;
        break;

      case 'inputForm.errors':
        renderErrors(elements, value, previousValue, state);
        break;
  
      default:
        break;
    }
  });

  // Controller
  elements.input.addEventListener('input', (e) => {
    watchedState.inputForm.input = e.target.value;
    const errors = validate(watchedState.inputForm.input);
    watchedState.inputForm.errors = errors;
    watchedState.inputForm.valid = isEmpty(errors);
  });

  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    watchedState.inputForm.processState = 'submiting';
    watchedState.inputForm.processError = null;

    try {
      const data = {
        name: watchedState.inputForm.input,
      };
      await axios.post(routes.usersPath(), data);
      watchedState.inputForm.processState = 'submited';
    } catch (err) {
      watchedState.inputForm.processState = 'error';
      watchedState.inputForm.processError = errorMessages.network.error;
      throw err;
    }
  });


};

export default app;