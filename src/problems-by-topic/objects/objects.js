import _ from 'lodash';

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

import isObject from 'lodash/isObject.js';
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

export const fromPairs = (data) => {
  const result = {};

  for (const [key, value] of data) {
    result[key] = value;
  }

  return result;
};

export const bqs = (data) => {
  const keys = Object.keys(data).sort();
  const result = '';

  for (const key of keys) {
    result.push(`${key}=${data[key]}`);
  }

  return result.join('&');
};

// import _ from 'lodash';
export const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

export const findWhere = (data, where) => {
  const entries = Object.entries(where);

  for (const item of data) {
    let find = true;
    for (const [key, value] of entries) {
      if (item[key] !== value) {
        find = false;
      }
    }
    if (find) {
      return item;
    }
  }

  return null;
};

// import _ from 'lodash';

const countLetters = (str) => {
  const numberOfLetters = {};

  for (const letter of str) {
    numberOfLetters[letter] = (numberOfLetters[letter] ?? 0) + 1;
  }

  return numberOfLetters;
};

export const scrabble = (str, word) => {
  const lowerCaseWord = word.toLowerCase();
  const lettersStr = countLetters(str);

  for (const letter of lowerCaseWord) {
    const count = _.get(lettersStr, letter, 0);
    if (count === 0) {
      return false;
    }
    lettersStr[letter] -= 1;
  }

  return true;
};

export const sortByCount = (numbers) => {
  const numByCount = {};

  for (const num of numbers) {
    numByCount[num] = (numByCount[num] ?? 0) + 1;
  }
  const entries = Object.entries(numByCount);
  const result = entries.sort((a, b) => b[1] - a[1]);
  return result.map((value) => Number(value[0]));

};

export const usersByAge = (acc, user) => {
  if (!Object.hasOwn(acc, user.age)) {
    acc[user.age] = [];
  }
  acc[user.age].push(user.name);
  return acc;
};