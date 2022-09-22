const flatten = (list) => list
  .reduce((acc, item) => {
    const result = (Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item]);
    return result;
  }, []);

export default flatten;
