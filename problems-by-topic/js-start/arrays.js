
/*  Реализуйте и экспортируйте функцию getWeekends(),
    которая возвращает массив из двух элементов – названий
    выходных дней на английском. Функция принимает на вход
    параметр – формат возврата.
    Всего есть два возможных значения:
        'long' (по умолчанию) – вернётся массив, содержащийзначения saturday и sunday
        'short' – вернётся массив со значениями sat и sun
*/
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

getWeekends();
// => [ 'saturday', 'sunday' ]

/*  Реализуйте и экспортируйте функцию swap(),
    которая меняет местами первый и последний элемент массива.
    Если массив содержит меньше двух элементов, то он возвращается как есть.
*/
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

swap(['one', 'two', 'three']);
// => [ 'three', 'two', 'one' ]

/*  Реализуйте и экспортируйте по умолчанию функцию,
    которая извлекает из массива элемент по указанному индексу,
    если индекс существует, либо возвращает значение по умолчанию.
    Функция принимает на вход три аргумента:
        Массив
        Индекс
        Значение по умолчанию (равно null)
*/
export const get = (items, index, param = null) => {
  if (index < items.length && index >= 0) {
    return items[index];
  }
  return param;
};

const cities = ['moscow', 'london', 'berlin', 'porto'];
get(cities, 7);
// => nill

/*  Реализуйте и экспортируйте по умолчанию функцию,
    которая принимает на вход массив и строковой префикс,
    и возвращает новый массив, в котором к каждому элементу
    исходного массива добавляется переданный префикс.
    Функция предназначена для работы со строковыми элементами.
    После префикса должен добавляться пробел.
*/
export const addPrefix = (items, str) => {
  const result = [];
  for (const item of items) {
    const newItem = `${str} ${item}`;
    result.push(newItem);
  }
  return result;
};

const namesList = ['john', 'smith', 'karl'];
addPrefix(namesList, 'Mr');
// => [ 'Mr john', 'Mr smith', 'Mr karl' ]

/*  Реализуйте и экспортируйте функцию reverse(),
    которая принимает на вход массив и располагает элементы
    исходного массива в обратном порядке.
*/
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

const names = ['john', 'smith', 'karl'];

reverse(names);
// console.log(names);
// => [ 'karl', 'smith', 'john' ]

/*  Реализуйте и экспортируйте функцию,
    которая высчитывает сумму всех элементов массива,
    которые делятся без остатка на 3 (три).
*/
export const calculateSum = (items) => {
  let sum = 0;
  for (const item of items) {
    if (item % 3 === 0) {
      sum += item;
    }
  }
  return sum;
};

const coll = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll);
// => 27

/*  Реализуйте и экспортируйте функцию, которая
    высчитывает среднее арифметическое элементов переданного массива.
*/
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

const temperatures = [36, 37.4, 39, 41, 36.6];
calculateAverage(temperatures);
// => 38

/*  Реализуйте функцию getSameParity(), которая принимает
    на вход массив чисел и возвращает новый,
    состоящий из элементов, у которых такая же чётность,
    как и у первого элемента входного массива. Экспортируйте функцию.
*/
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

getSameParity([2, 2, 8, 7, 2]);
// => [ 2, 2, 8, 2 ]

/*  Реализуйте и экспортируйте по умолчанию функцию,
    которая принимает на вход в виде массива кошелёк с деньгами
    и название валюты и возвращает сумму денег указанной валюты.
    Параметры функции:
        массив, содержащий купюры разных валют с различными номиналами,
        наименование валюты.
*/
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

const money = [
  'eur 10',
  'rub 50',
  'eur 5',
  'rub 10',
  'rub 10',
  'eur 100',
  'rub 200',
];
getTotalAmount(money, 'rub');
// => 270

/*  Реализуйте и экспортируйте функцию,
    которая находит команду победителя для конкретной суперсерии.
    Победитель определяется как команда, у которой больше
    побед (не количество забитых шайб) в конкретной серии.
    Функция принимает на вход массив, в котором каждый
    элемент — это массив, описывающий счет в конкретной игре
    (сколько шайб забила Канада и СССР). Результат функции –
    название страны: 'canada', 'ussr'. Если суперсерия закончилась
    в ничью, то нужно вернуть null.
*/
export const getSuperSeriesWinner = (coll) => {
  const canadaVins = coll.reduce((acc, [canadaGolls, ussrGolls]) => {
    return canadaGolls > ussrGolls ? (acc += 1) : acc;
  }, 0);
  const bothVins = coll.reduce((acc, [canadaGolls, ussrGolls]) => {
    return canadaGolls === ussrGolls ? (acc += 1) : acc;
  }, 0);

  return canadaVins > (coll.length - bothVins) / 2 ? 'canada' : canadaVins === (coll.length - bothVins) / 2 ? null : 'ussr';
};

// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];

getSuperSeriesWinner(scores); // 'canada'

/*  Реализуйте функцию buildDefinitionList(),
    которая генерирует HTML список определений
    (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку.
    При отсутствии элементов в массиве функция возвращает
    пустую строку. Экспортируйте функцию по умолчанию.
*/
const buildDefinitionList = (definitions) => {
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

const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

/*  Реализуйте и экспортируйте по умолчанию функцию,
    которая заменяет каждое вхождение указанных слов
    в предложении на последовательность $#%! и возвращает
    полученную строку. Аргументы:
            текст,
            набор стоп слов.
    Словом считается любая непрерывная последовательность
    символов, включая любые спецсимволы (без пробелов).
*/
export const makeCensored = (str, value) => {
  const arr = str.split(' ');

  const newArr = [];
  for (const word of arr) {
    const newWord = value.includes(word) ? '$#%!' : word;
    newArr.push(newWord);
  }

  return newArr.join(' ');
};

const sentence = 'When you play the game of thrones, you win or you die';
makeCensored(sentence, ['die', 'play']);
// => When you $#%! the game of thrones, you win or you $#%!

/*  Реализуйте и экспортируйте по умолчанию функцию,
    принимающую на вход два массива и возвращающую количество
    общих уникальных значений в обоих массивах.
*/
import _ from 'lodash';

export const getSameCount = (array1, array2) => {
  let sum = 0;
  const array1Uniq = _.uniq(array1);
  const array2Uniq = _.uniq(array2);

  for (const item of array1Uniq) {
    if (array2Uniq.includes(item)) sum += 1;
  }
  return sum;
};

console.log(getSameCount([], [])); // 0

/*  Реализуйте и экспортируйте по умолчанию функцию,
    которая получает на вход строку и считает,
    сколько символов (без учёта повторяющихся символов)
    спользовано в этой строке. Например, в строке yy используется
    всего один символ — y. А в строке 111yya! — используется
    четыре символа: 1, y, a и !.
*/
// import _ from 'lodash';
const countUniqChars = (str) => {
  const array = str.split('');
  const result = _.uniq(array);
  return result.length;
};

const text = 'yyab';
countUniqChars(text);
// => y, a, b

// Функция сортирует исходный массив coll по возрастанию
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

bubbleSort([3, 2, 10, -2, 0]);
// => [ -2, 0, 2, 3, 10 ]

/*  Реализовать функцию, которая проверяет, что парные скобки
    сбалансированы. То есть каждая открывающая скобка
    имеет закрывающую: (), ((()())). А вот пример
    несбалансированных скобок: (, ((), )(.
    Для проверки баланса недостаточно считать количество,
    важен так же порядок в котором они идут.
*/
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

checkIsBalanced('()()()()()()()()())');
// => false

/*  Реализуйте и экспортируйте функцию, которая
    принимает на вход строку, состоящую только из
    открывающих и закрывающих скобок разных типов,
    и проверяет, является ли эта строка сбалансированной.
    Открывающие и закрывающие скобки должны быть одного вида.
    Пустая строка (отсутствие скобок) считается сбалансированной.
    Скобки — это парные структуры. У каждой открывающей скобки должна
    быть соответствующая ей закрывающая скобка.
    Скобки должны закрываться в правильном порядке.
*/
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

isBracketStructureBalanced('{<>}}'); // false

/*  Реализуйте и экспортируйте функцию,
    которая принимает на вход два отсортированных массива
    и находит их пересечение. Пересечение двух массивов
    A и B — это массив только с теми элементами A и B,
    которые одновременно принадлежат обоим массивам, без дублей.
*/
// import _ from 'lodash';
export const getIntersectionOfSortedArrays = (array1, array2) => {
  const filteredArray = array1.filter((value) => array2.includes(value));
  return _.uniq(filteredArray);
};

const array1 = [10, 11, 24];
const array2 = [10, 13, 14, 18, 24, 30];

getIntersectionOfSortedArrays(array1, array2);
// => [10, 24]

/*  Реализуйте и экспортируйте функцию getTheNearestLocation(),
    которая находит ближайшее место к указанной точке на карте
    и возвращает его. Параметры функции:
    locations – список мест на карте (массив). Каждое место – массив из двух элементов:
        Первый элемент – это название места
        Второй – точка на карте (массив из двух чисел-координат x и y)
    point – текущая точка на карте
*/
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

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если мест нет, то возвращается null
getTheNearestLocation([], currentPoint); // null
getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]

/*  Реализуйте и экспортируйте функцию getMax(),
    которая ищет в массиве максимальное значение и возвращает его.
*/
export const getMax = (coll) => {
  if (coll.length === 0) return null;

  let [max, ...rest] = coll;
  for (const value of rest) {
    if (value > max) max = value;
  }

  return max;
};

getMax([1, 10, 8]);
// => 10

/*  Реализуйте и экспортируйте функцию flatten().
    Эта функция принимает на вход массив и выпрямляет его:
    если элементами массива являются массивы, то flatten
    сводит всё к одному массиву, раскрывая один уровень вложенности.
*/
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

flatten([1, [[2], [3]], [9]]);
// => [1, [2], [3], 9]