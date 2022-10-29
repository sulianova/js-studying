import _ from 'lodash';

const functions = {
  right: _.gt,
  wrong1: _.gte,
  wrong2: (a, b) => a !== b,
  wrong3: () => false,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right';
  return functions[name];
};