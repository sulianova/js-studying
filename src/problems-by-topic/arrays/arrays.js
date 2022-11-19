import _ from 'lodash';

export const getWeekends = (format) => {
  const longFormat = ['saturday', 'sunday'];
  const shortFormat = ['sat', 'sun'];

  switch (format) {
    case 'long':
      return longFormat;
    case 'short':
      return shortFormat;
    default:
      return longFormat;
  }
};

export const swap = (m) => {
  const firstItem = m[0];
  const lastItem = m[m.length - 1];

  if (m.length >= 2) {
    m[0] = lastItem;
    m[m.length - 1] = firstItem;
    return m;
  }

  return m;
};

export const get = (items, index, param = null) => {
  if (index < items.length && index >= 0) {
    return items[index];
  }
  return param;
};

export const addPrefix = (items, str) => {
  const result = [];
  for (const item of items) {
    const newItem = `${str} ${item}`;
    result.push(newItem);
  }
  return result;
};

export const reverse = (coll) => {
  const lastIndex = coll.length - 1;
  const middleIndex = lastIndex / 2;

  for (let i = 0; i < middleIndex; i += 1) {
    const mirrorIndex = lastIndex - i;
    const temp = coll[i];
    coll[i] = coll[mirrorIndex];
    coll[mirrorIndex] = temp;
  }
};

export const calculateSum = (items) => {
  let sum = 0;
  for (const item of items) {
    if (item % 3 === 0) {
      sum += item;
    }
  }
  return sum;
};

export const calculateAverage = (items) => {
  let sum = 0;
  let average = null;

  for (const item of items) {
    sum += item;
  }

  if (items.length !== 0) {
    average = sum / items.length;
  }

  return average;
};

export const getSameParity = (items) => {
  if (items.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(items[0] % 2);

  for (const item of items) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

export const getTotalAmount = (money, currency) => {
  let sum = 0;

  for (const bill of money) {
    const currentCurrency = bill.slice(0, 3);
    if (currentCurrency !== currency) {
      continue;
    }
    const denomination = Number(bill.slice(4));
    sum += denomination;
  }

  return sum;
};

export const getSuperSeriesWinner = (coll) => {
  const canadaVins = coll.reduce((acc, [canadaGolls, ussrGolls]) => (canadaGolls > ussrGolls ? (acc += 1) : acc), 0);
  const bothVins = coll.reduce((acc, [canadaGolls, ussrGolls]) => (canadaGolls === ussrGolls ? (acc += 1) : acc), 0);

  return canadaVins > (coll.length - bothVins) / 2 ? 'canada' : canadaVins === (coll.length - bothVins) / 2 ? null : 'ussr';
};

export const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const definition of definitions) {
    const name = definition[0];
    const description = definition[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
};

export const makeCensored = (str, value) => {
  const arr = str.split(' ');

  const newArr = [];
  for (const word of arr) {
    const newWord = value.includes(word) ? '$#%!' : word;
    newArr.push(newWord);
  }

  return newArr.join(' ');
};

export const getSameCount = (array1, array2) => {
  let sum = 0;
  const array1Uniq = _.uniq(array1);
  const array2Uniq = _.uniq(array2);

  for (const item of array1Uniq) {
    if (array2Uniq.includes(item)) sum += 1;
  }
  return sum;
};

// import _ from 'lodash';
export const countUniqChars = (str) => {
  const array = str.split('');
  const result = _.uniq(array);
  return result.length;
};

export const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  // Объявляем переменную swapped, значение которой показывает был ли
  // совершен обмен элементов во время перебора массива
  let swapped;
  // do..while цикл. Работает почти идентично while
  // Разница в проверке. Тут она делается не до выполнения тела, а после.
  // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
  do {
    swapped = false;
    // Перебираем массив и меняем местами элементы, если предыдущий
    // больше, чем следующий
    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        // temp – временная константа для хранения текущего элемента
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        // Если сработал if и была совершена перестановка,
        // присваиваем swapped значение true
        swapped = true;
      }
    }
    // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
    // в конце массива
    stepsCount -= 1;
  } while (swapped); // продолжаем, пока swapped === true

  return coll;
};

export const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const index = getRandomInt(arr.length);

  let pivot = arr[index];
  const left = [];
  const right = [];
    
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== index) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

export const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
      if (left[0] < right[0]) {
          arr.push(left.shift());
      } else {
          arr.push(right.shift()) ;
      }
  }
  
  return [ ...arr, ...left, ...right ];
};

export const mergeSort = (array) => {
  const half = Math.trunc(array.length / 2);
  
  if(array.length < 2) {
    return array;
  }
  
  const left = array.slice(0, half);
  const right = array.slice(half, array.length);
  return merge(mergeSort(left),mergeSort(right));
};

export const checkIsBalanced = (expression) => {
  // Инициализация стека
  const stack = [];
  // Проходим по каждому символу в строке
  for (const symbol of expression) {
    // Смотрим открывающий или закрывающий
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')') {
      // Если для закрывающего не нашлось открывающего, значит баланса нет
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

export const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// import _ from 'lodash';
export const getIntersectionOfSortedArrays = (array1, array2) => {
  const filteredArray = array1.filter((value) => array2.includes(value));
  return _.uniq(filteredArray);
};

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs * xs + ys * ys);
};

export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }

  let [nearestLocation] = locations;
  const [, nearestPoint] = nearestLocation;
  let lowestDistance = getDistance(currentPoint, nearestPoint);

  for (const location of locations) {
    const [, point] = location;
    const distance = getDistance(currentPoint, point);
    if (distance < lowestDistance) {
      lowestDistance = distance;
      nearestLocation = location;
    }
  }

  return nearestLocation;
};

export const getMax = (coll) => {
  if (coll.length === 0) return null;

  let [max, ...rest] = coll;
  for (const value of rest) {
    if (value > max) max = value;
  }

  return max;
};

export const flatten = (coll) => {
  let result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result = [...result, item];
    }
  }

  return result;
};

// import _ from 'lodash';
export const getLastWordLength = (sentence) => {
  if (sentence.length === 0) {
    return 0;
  }
  const sentenceArrayTrimed = sentence.trim().split(' ');
  const lastWord = _.last(sentenceArrayTrimed);
  return lastWord.length;
};

export const summaryRanges = (numbers) => {
  let stack = [];
  const result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    stack.push(numbers[i]);
    if (numbers[i] + 1 !== numbers[i + 1]) {
      if (stack.length > 1) {
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
      }
      stack = [];
    }
  }

  return result;
};

export const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  for (const char of str) {
    const index = sequence.indexOf(char);
    sequence.push(char);
    if (index !== -1) {
      sequence = sequence.slice(index + 1);
    }
    maxLength = Math.max(sequence.length, maxLength);
  }

  return maxLength;
};

// import _ from 'lodash';

// Поворачиваем матрицу против часовой стрелки
const rotate = (matrix) => _.reverse(_.zip(...matrix));

export const buildSnailPath = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  const [head, ...tail] = matrix;
  return [head, buildSnailPath(rotate(tail))].flat();
};

export const isContinuousSequence = (sequence) => {
  if (sequence.length <= 1) return false;

  for (let i = 0; i < sequence.length - 1; i += 1) {
    if (sequence[i] + 1 !== sequence[i+1]) {
      return false;
    }
  }

  return true;
};