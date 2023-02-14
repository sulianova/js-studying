import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import app from './app10.js';

const state1 = {
  lng: 'ru',
  clicksCount: 25,
};
const container1 = document.querySelector('.container-1');
app(container1, state1);

const state2 = {
  lng: 'en',
  clicksCount: 10,
};
const container2 = document.querySelector('.container-2');
app(container2, state2);