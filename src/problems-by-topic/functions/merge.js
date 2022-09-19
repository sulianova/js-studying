import _ from 'lodash';

export default (...objects) => objects.reduce((acc, obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!Object.hasOwn(acc, key)) {
      acc[key] = [];
    }

    acc[key].push(obj[key]);
    acc[key] = _.uniq(acc[key]);
  }

  return acc;
}, {});

// const cons = (list, el) => _.union(list, [el]);
// export default (...dictionaries) => _.mergeWith({}, ...dictionaries, cons);
