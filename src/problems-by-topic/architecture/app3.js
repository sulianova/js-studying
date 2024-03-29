const predicates = {
  eq: (value, el) => String(el) === String(value),
  gte: (value, el) => el >= Number(value),
  lte: (value, el) => el <= Number(value),
};

const inputsConfig = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_lte: 'input',
  frequency_gte: 'input',
};

const filterItems = (items, query) => {
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
    const [propertyName, predicate] = filterName.split('_');
    const match = predicates[predicate];
    const itemProperty = item[propertyName];
    return match(filterValue, itemProperty);
  }));
};

const render = (state) => {
  const resultEl = document.querySelector('.result');
  const filteredItems = filterItems(state.laptops, state.filter);

  if (filteredItems.length === 0) {
    resultEl.textContent = '';
    return;
  }
  const html = `<ul>${filteredItems.map((item) => `<li>${item.model}</li>`).join('')}</ul>`;
  resultEl.innerHTML = html;
};

export default (laptops) => {
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_lte: null,
      frequency_gte: null,
    },
  };

  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const inputEl = document.querySelector(`[name="${inputName}"]`);
    inputEl.addEventListener(`${eventName}`, (e) => {
      state.filter[inputName] = e.target.value === '' ? null : e.target.value;
      render(state);
    });
  });
  render(state);
};