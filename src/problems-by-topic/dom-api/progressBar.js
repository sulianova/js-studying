export default () => {
  const element = document.querySelector('progress');
  const handler = (counter = 0) => {
    if (counter <= 100) {
      element.setAttribute('value', counter);
      setTimeout(() => handler(counter + 1), 1000);
    }
  };
  handler();
};