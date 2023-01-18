export default (documentElement) => {
  const children = Array.from(documentElement.parentNode.body.children);
  return children
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
};