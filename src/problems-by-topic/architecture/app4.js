const render = (state, container) => {
  container.innerHTML = '';
  const buttons = state.companies.map(({id, name}) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = name;
    button.addEventListener('click', () => {
      const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
      state.uiState.selectedCompanyId = nextSelectedId;
      render(state, container);
    });
    return button;
  });

  container.append(...buttons);

  if (state.uiState.selectedCompanyId === null) {
    return;
  }

  const outputContainer = document.createElement('div');
  const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
  outputContainer.textContent = selectedCompany.description;
  container.append(outputContainer);
};

export default (companies) => {
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null,
    },
  };

  const container = document.querySelector('.container');

  render(state, container);
};