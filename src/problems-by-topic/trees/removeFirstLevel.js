export default (tree) => {
  const nodes = tree.filter((elem) => Array.isArray(elem));
  return nodes.flat();
};
