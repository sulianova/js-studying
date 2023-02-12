import onChange from 'on-change';

export default () => {
  // Model
  const state = {
    lists: {},
  };

  // View
  const watchedState = onChange(state, (path, current, previous) => {
    const currentTab = document.querySelector(`#${current}`);
    const currentTabPanel = document.querySelector(`[aria-labelledby="${current}"]`);
    const previousTab = document.querySelector(`#${previous}`);
    const previousTabPanel = document.querySelector(`[aria-labelledby="${previous}"]`);

    currentTab.classList.add('active');
    currentTabPanel.classList.add('active', 'show');
    previousTab.classList.remove('active');
    previousTabPanel.classList.remove('active', 'show');
  });

  const lists = document.querySelectorAll('[role="tablist"]');

  // Controller
  lists.forEach((list) => {
    const activeTab = list.querySelector('[role="tab"].active');

    state.lists[list.id] = {
      tabId: activeTab.id,
    };

    list.addEventListener('click', (e) => {
      e.preventDefault();
      watchedState.lists[list.id].tabId = e.target.id;
    });
  });

};  