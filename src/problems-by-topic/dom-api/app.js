export default () => {
  const button = document.getElementById('alert-generator');
  const alertsBox = document.querySelector('.alerts');
  let i = 1;
  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.textContent = `Alert ${i}`;

    alertsBox.prepend(alert);

    i += 1;
  });
};
