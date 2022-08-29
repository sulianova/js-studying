// ТЕСТ ДЛЯ TAKE, которая возвращает первые n элементов из массива.
// По умолчанию n равен 1. Если n отрицательное число, то возвращается пустой массив.

import { strict as assert } from "assert";
// при использовании strict-режима
// проверка equal равносильна strictEqual
import _ from "lodash";

// function to test
const functions = {
  right1: (items, n = 1) => _.take(items, n),
  wrong1: (items, n = 1) => (n > 1 ? items.slice() : items.slice(0, n)),
  wrong2: (items, n = 1) => (n <= items.length ? items.slice(0, n) : []),
  wrong3: (items, n = 5) => items.slice(0, n),
  wrong4: (items, n = 1) => (items.length === 0 ? [0] : items.slice(0, n)),
  wrong5: (items, n = 1) => items.slice(0, n),
};

const getFunction = () => {
  const name = process.env.FUNCTION_VERSION || "right1";
  return functions[name];
};

const take = getFunction();

// test
assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([4, 3], 9), [4, 3]);
assert.deepEqual(take([4, 3], -1), []);
assert.deepEqual(take([1, 2, 3]), [1]);

// example
// take([], 2); // []
// take([1, 2, 3]); // [1]
// take([1, 2, 3], 2); // [1, 2]
// take([4, 3], 9); // [4, 3]
// take([4, 3], -1); // []
