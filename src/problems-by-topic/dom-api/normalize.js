export default () => {
  const tags = document.body.innerHTML
    .trim()
    .split('\n')
    .map((element) => `<p>${element}</p>`);
  document.body.innerHTML = tags.join('\n');
};