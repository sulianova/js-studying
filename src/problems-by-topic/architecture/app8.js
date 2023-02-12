
import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required('email must be a valid email').email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
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
  Object.entries(elements.inputs).forEach(([inputName, inputElement]) => {
    const error = errors[inputName];
    const inputHadError = has(prevErrors, inputName);
    const inputHasError = has(errors, inputName);
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
  });
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
      elements.container.innerHTML = 'User Created!';
      break;

    default:
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const handleProcessError = () => {
  // сообщение о сетевой ошибке
};

export default () => {
  // Model
  const elements = {
    container: document.querySelector('[data-container="sign-up"]'),
    form: document.querySelector('[data-form="sign-up"]'),
    inputs: {
      name: document.getElementById('sign-up-name'),
      email: document.getElementById('sign-up-email'),
      password: document.getElementById('sign-up-password'),
      passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
    },
    submitButton: document.querySelector('input[type="submit"]'),
  };

  const state = {
    registrationForm: {
      valid: true,
      processState: 'filling', // errors , submiting, submited
      processError: null,
      errors: {},
      inputs: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      inputsUi: {
        touched: {
          name: false,
          email: false,
          password: false,
          passwordConfirmation: false,
        },
      },
    },
  };

  // View
  const watchedState = onChange(state, (path, value, previousValue) => {
    switch (path) {
      case 'registrationForm.processState':
        handleProcessState(elements, value);
        break;

      case 'form.processError':
        handleProcessError();
        break;
  
      case 'registrationForm.valid':
        elements.submitButton.disabled = !value;
        break;
  
      case 'registrationForm.errors':
        renderErrors(elements, value, previousValue, state);
        break;
  
      default:
        break;
    }

  });


  // Controller
  Object.entries(elements.inputs).forEach(([inputName, inputElement]) => {
    inputElement.addEventListener('input', e => {
      watchedState.registrationForm.inputs[inputName] = e.target.value;
      watchedState.registrationForm.inputsUi.touched[inputName] = true;
      const errors = validate(watchedState.registrationForm.inputs);
      watchedState.registrationForm.errors = errors;
      watchedState.registrationForm.valid = isEmpty(errors);
    });
  });

  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    watchedState.registrationForm.processState = 'submiting';
    watchedState.registrationForm.processError = null;

    try {
      const data = {
        name: watchedState.registrationForm.inputs.name,
        email: watchedState.registrationForm.inputs.email,
        password: watchedState.registrationForm.inputs.password,
      };
      await axios.post(routes.usersPath(), data);
      watchedState.registrationForm.processState = 'submited';
    } catch (err) {
      watchedState.registrationForm.processState = 'error';
      watchedState.registrationForm.processError = errorMessages.network.error;
      throw err;
    }

  });
};
