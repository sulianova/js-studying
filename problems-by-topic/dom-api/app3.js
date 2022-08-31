//ПОЛУЧИТЬ ДАННЫЕ ИЗ ФОРМЫ И ЭКРАНИРОВАТЬ ИХ

import { htmlEscape } from 'escape-goat';

const render = (element, data) => {
    const div = document.createElement('div');
    const { email, name, comment } = data;
    div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${htmlEscape(email)}</div>
      <div>Name: ${htmlEscape(name)}</div>
      <div>Comment: ${htmlEscape(comment)}</div>
    `;
    element.replaceWith(div);
};

89653592366

export default () => {
    const formElement = document.querySelector('.feedback-form');
    const handle = (element) => {
      element.preventDefault();
      const formData = new FormData(element.target);
  
      render(formElement, Object.fromEntries(formData));
    };

    formElement.addEventListener('submit', handle);
};