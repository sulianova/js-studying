export const  sortDeps = (deps) => {
  const add = (acc, key) => {
    const subDeps = deps[key] || [];
    const subAcc = subDeps.reduce(add, []);
    return { ...acc, ...subAcc, [key]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};