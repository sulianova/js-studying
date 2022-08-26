//ТЕСТ НА indexOf, которая возвращает первое вхождение элемента с указанного значения
//начало просмотра — по умолчанию, для пустого массива ответ — -1
import assert from 'power-assert';
import getFunction from '../functions.js';

const indexOf = getFunction();

//возвращает индекс первого вхождения
assert(indexOf([1, 2, 1, 2], 2) === 1);
//начиная поиск с индекса fromIndex
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
//возвращает -1, если нет вхождения
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
//значение которого по умолчанию равно нулю
assert(indexOf([2, 2, 1, 2], 2) === 0);
//передача пустого массива
assert(indexOf([], 8) === -1);


//ТЕСТ ДЛЯ TAKE которая возвращает первые n элементов из массива.
//По умолчанию n равен 1. Если n отрицательное число, то возвращается пустой массив.

import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();


assert.deepStrictEqual(take([], 2), []);
assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepStrictEqual(take([4, 3], 9), [4, 3]);
assert.deepStrictEqual(take([4, 3], -1), []);
assert.deepStrictEqual(take([1, 2, 3]), [1]);

take([], 2); // []
take([1, 2, 3]); // [1]
take([1, 2, 3], 2); // [1, 2]
take([4, 3], 9); // [4, 3]
take([4, 3], -1); // []

//ПРИМЕР ИСПОЛЬЗОВАНИЯ POWER-ASSERT
import assert from 'power-assert';

const array = [1, 2, 3];
const zero = 0;
const two = 2;

assert(array.indexOf(zero) === two);


//ТЕСТ ДЛЯ ФУНКЦИИ GET

import _ from 'lodash';

const functions = {
  right1: _.get,
  fail1: (obj = {}, key = null) => obj[key],
  fail2: (obj = {}, key = null, defaultValue = null) => defaultValue || obj[key],
  fail3: (obj = {}, key = null, defaultValue = null) => ((obj[key] && !defaultValue)
    ? null
    : _.get(obj, key, defaultValue)
  ),
};

const getFunction = () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};

const get = getFunction();

if (get({ key: 'value' }, "key") !== 'value') {
    throw new Error('boom!');
}

if (get({}, 'key', 'value') !== 'value') {
    throw new Error('boom!');
}

if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
    throw new Error('boom!');
}

console.log(get({ hello: 'world' }, 'hello')); // world
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty')); // 'kitty'
