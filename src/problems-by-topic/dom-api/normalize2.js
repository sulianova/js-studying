import 'core-js/stable';
import 'regenerator-runtime/runtime';
import camelCase from 'lodash/camelCase';

export default (document) => {
  const elements = document.body.getElementsByTagName('*');
  [...elements].forEach((elem) => {
    elem.classList.forEach((item) => {
      elem.classList.replace(item, camelCase(item));
    });
  });
};