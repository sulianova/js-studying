import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

const ru = {
  translation: {
    languages: {
      en: "English",
      ru: "Русский",
    },
    buttons: {
      counter: {
        count_one: '{{count}} клик',
        count_few: '{{count}} клика',
        count_many: '{{count}} кликов',
      },
      reset: "Сбросить",
    },
  },
};

const en = {
  translation: {
    languages: {
      en: "English",
      ru: "Русский",
    },
    buttons: {
      counter: {
        count_one: '{{count}} click',
        count_other: '{{count}} clicks',
      },
      reset: "Reset",
    },
  },
};

const languages = ['en', 'ru'];

const render = (container, watchedState, i18nInstance) => {
  const lngToggler = document.createElement('div');
  lngToggler.classList.add('btn-group');
  lngToggler.setAttribute('role', 'group');

  languages.forEach((lng) => {
    const btn = document.createElement('button');
    const className = (watchedState.lng === lng) ? 'btn-primary' : 'btn-outline-primary';
    btn.classList.add('btn', 'mb-3', className);
    btn.setAttribute('type', 'button');
    btn.setAttribute('data-lng', lng);
    btn.textContent = i18nInstance.t(`languages.${lng}`);
    btn.addEventListener('click', (e) => {
      watchedState.lng = e.target.dataset.lng;
    });
    lngToggler.append(btn);
  });


  const counter = document.createElement('button');
  counter.classList.add('btn', 'btn-info', 'mb-3', 'align-self-center');
  counter.setAttribute('type', 'button');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });

  const reset = document.createElement('button');
  reset.classList.add('btn', 'btn-warning');
  reset.setAttribute('type', 'button');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });

  container.innerHTML = '';
  container.append(lngToggler, counter, reset);
};

export default async () => {
  // Model
  const defaultLanguage = 'en';
  const container = document.querySelector('.container');
  const i18nInstance = i18n.createInstance();
  await i18nInstance.init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });

  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
  };

  // View
  const watchedState = onChange(state, (path, value, previousValue) => {
    switch (path) {
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;

      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;

      default:
        break;
    }
  });

  // Controller
  render(container, watchedState, i18nInstance);
};