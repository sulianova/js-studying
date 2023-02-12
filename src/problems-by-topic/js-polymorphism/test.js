import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

const runApp = async () => {
  await i18n.init({ lng: 'ru', debug: true, resources }); //init

  console.log(i18n.t('btn')); // "Привет мир!"

  await i18n.changeLanguage('en');
  console.log(i18n.t('btn')); // "Привет мир!"

  await i18n.changeLanguage('ru');
  console.log(i18n.t('btn')); // "Привет мир!"
};

export default runApp;