import _ from 'lodash';

const createObject = (object) => new Proxy(object, {
  get: (target, name) => {
    if (!(name in target)) {
      return createObject({});
    }
    const value = target[name];
    return _.isObject(value) ? createObject(value) : value;
  },
});

export default createObject;
