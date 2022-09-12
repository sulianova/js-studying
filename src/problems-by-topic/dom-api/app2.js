// ПЕРЕКЛЮЧАЕМОЕ МЕНЮ

export default () => {
    const handle = (event, container) => {
        const targetTab = event.target;
        if (targetTab.classList.contains('active')) {
          return;
        }
    
        const targetTabContentId = targetTab.dataset.bsTarget;
        const targetTabContent = document.querySelector(targetTabContentId);
    
        const activeTab = container.querySelector('.active');
        const activeTabContentId = activeTab.dataset.bsTarget;
        const activeTabContent = document.querySelector(activeTabContentId);
    
        targetTab.classList.add('active');
        targetTabContent.classList.add('active');
    
        activeTab.classList.remove('active');
        activeTabContent.classList.remove('active');
      };

    const navs = document.querySelectorAll('.nav');
    navs.forEach((nav) => {
            const tabs = nav.querySelectorAll('[data-bs-toggle]');
            tabs.forEach((tab) => {
              tab.addEventListener('click', (event) => handle(event, nav));
            });
          });
 };

