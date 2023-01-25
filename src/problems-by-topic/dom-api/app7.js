
const openHandler = (modal) => {
  modal.classList.add('show');
  modal.style.display = 'block';
};

const closeHandler = (modal) => {
  modal.classList.remove('show');
  modal.style.display = 'none';
};

export default () => {
  const buttons = document.querySelectorAll('[data-toggle="modal"]');
  buttons.forEach((button) => {
    const id = button.dataset.target;
    const modal = document.querySelector(id);
    button.addEventListener('click', () => openHandler(modal));
    const closeButton = modal.querySelector('[data-dismiss="modal"]');
    closeButton.addEventListener('click', () => closeHandler(modal));
  });
};