import 'whatwg-fetch';
import { htmlEscape } from 'escape-goat';

export default () => {
  const autocompleteElements = document.querySelectorAll(
    'input[data-autocomplete]',
  );
  autocompleteElements.forEach((element) => {
    const { origin } = window.location;
    const pathname = element.dataset.autocomplete;
    const dataAutocompleteName = element.dataset.autocompleteName;

    element.addEventListener('input', async (event) => {
      const subString = event.target.value;
      const parsedUrl = new URL(pathname, origin);
      parsedUrl.searchParams.append('search', subString);

      const response = await fetch(parsedUrl);
      const items = await response.json();

      const list = document.querySelector(
        `ul[data-autocomplete-name="${dataAutocompleteName}"]`,
      );
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options
        .map((item) => `<li>${htmlEscape(item)}</li>`)
        .join('\n');
      list.innerHTML = listHTML;
    });
  });
};