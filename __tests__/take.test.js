import getFunction from '../src/problems-by-topic/atesting/take.js';

const take = getFunction();

test('rget', () => {
  expect(take([], 2)).toEqual([]);
  expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  expect(take([4, 3], 9)).toEqual([4, 3]);
  expect(take([4, 3], -1)).toEqual([]);
  expect(take([1, 2, 3])).toEqual([1]);
});

// import { strict as assert } from "assert";
// при использовании strict-режима
// проверка equal равносильна strictEqual

// assert.deepEqual(take([], 2), []);
// assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
// assert.deepEqual(take([4, 3], 9), [4, 3]);
// assert.deepEqual(take([4, 3], -1), []);
// assert.deepEqual(take([1, 2, 3]), [1]);