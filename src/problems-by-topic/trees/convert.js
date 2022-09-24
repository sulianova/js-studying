const convert = (tree) => tree.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});

export default convert;
