import _ from "lodash";

export const normalize = (data) => {
  data.name = _.capitalize(data.name);
  data.description = data.description.toLowerCase();
  return data;
};

export const is = (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};

// import _ from 'lodash';
export const getDomainInfo = (domain) => {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
    // else if другие протоколы
  } else {
    scheme = 'http';
  }

  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};

// import _ from 'lodash';
export const countWords = (str) => {
  const strLowerCase = str.toLowerCase();
  const words = _.words(strLowerCase);
  const result = {};

  for (const word of words) {
    if (Object.hasOwn(result, word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
    // result[word] = (result[word] ?? 0) + 1;
  }
  return result;
};

export const pick = (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};

export const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (!Object.hasOwn(current, key)) {
      return null;
    }
    current = current[key];
  }

  return current;
};

// import _ from 'lodash';
export const fill = (current, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(current, filteredData);
};


export const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

export const make = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
};

export const getSortedNames = (users) => {
  const names = [];

  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
};