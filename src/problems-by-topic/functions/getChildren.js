export default (data) => {
  const childrens = data.map((user) => user.children);
  const result = childrens.flat();
  return result;
};
