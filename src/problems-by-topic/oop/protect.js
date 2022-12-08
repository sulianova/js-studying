const validateProperty = (target, name) => {
  if (!(name in target)) {
    throw new Error(`Property "${name}" doesn't exist`);
  }
  if (name.startsWith('_')) {
    throw new Error(`Property "${name}" is protected`);
  }
};

const protect = (obj) => new Proxy(obj, {
  get: (target, name) => {
    validateProperty(target, name);
    const property = target[name];

    return (typeof property === 'function') ? property.bind(obj) : property;
  },
  set: (target, name, value) => {
    validateProperty(target, name);
    target[name] = value;

    return true;
  },
});

export default protect;