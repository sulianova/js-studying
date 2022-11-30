export const bindApply = (context, fn) => function (...args) {
  return fn.apply(context, args);
};

export const bindCall = (context, fn) => function (...args) {
  return fn.call(context, ...args);
};
