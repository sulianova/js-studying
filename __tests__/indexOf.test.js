import getFunction from '../src/problems-by-topic/atesting/indexOf.js';

const indexOf = getFunction();

test('rget', () => {
  expect(indexOf([1, 2, 1, 2], 2)).toEqual(1);
  expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
  expect(indexOf([2, "one", "cat", false], 8)).toEqual(-1);
  expect(indexOf([2, 2, 1, 2], 2)).toEqual(0);
  expect(indexOf([], 8)).toEqual(-1);
});

// import assert from "power-assert";

// assert(indexOf([1, 2, 1, 2], 2) === 1); // возвращает индекс первого вхождения
// assert(indexOf([1, 2, 1, 2], 2, 2) === 3); // начиная поиск с индекса fromIndex
// assert(indexOf([2, "one", "cat", false], 8) === -1); // возвращает -1, если нет вхождения
// assert(indexOf([2, 2, 1, 2], 2) === 0); // значение которого по умолчанию равно нулю
// assert(indexOf([], 8) === -1); // передача пустого массива
