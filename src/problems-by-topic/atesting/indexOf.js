import _ from 'lodash';

const functions = {
  right1: (items, value, fromIndex = 0) => items.indexOf(value, fromIndex),
  wrong1: (items, value, fromIndex = 1) => items.indexOf(value, fromIndex),
  wrong2: (items, value, fromIndex) => {
    const index = items.indexOf(value, fromIndex);
    return index === -1 ? 0 : index;
  },
  wrong3: (items, value) => items.indexOf(value),
  wrong4: (items, value) => _.lastIndexOf(items, value),
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
