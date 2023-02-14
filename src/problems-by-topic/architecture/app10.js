import i18n from 'i18next';
import onChange from 'on-change';
import resources from './app10Resourses.js';

const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;

  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const lngToggler = document.createElement('div');
  lngToggler.classList.add('btn-group');
  lngToggler.setAttribute('role', 'group');

  languages.forEach((lng) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
    btn.classList.add('btn', 'mb-3', className);
    btn.setAttribute('data-lng', lng);
    btn.textContent = i18nInstance.t(`languages.${lng}`);
    btn.addEventListener('click', handleSwitchLanguage(watchedState));
    lngToggler.appendChild(btn);
  });

  const counter = document.createElement('button');
  counter.setAttribute('type', 'button');
  counter.classList.add('btn', 'btn-info', 'btn-lg', 'mb-3', 'align-self-center');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });

  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.classList.add('btn', 'btn-warning');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });

  container.innerHTML = '';
  container.append(lngToggler, counter, reset);
};

export default async (container, initialState = {}) => {

  const defaultLanguage = 'en';

  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
    ...initialState,
  };
  
  const i18nInstance = i18n.createInstance();
  await i18nInstance.init({
    lng: state.lng,
    debug: false,
    resources,
  });



  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;

      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;

      default:
        break;
    }
  });

  render(container, watchedState, i18nInstance);
};
