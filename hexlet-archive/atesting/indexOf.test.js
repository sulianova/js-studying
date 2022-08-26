// Тест на indexOf, которая возвращает первое вхождение элемента с указанного значения
// начало просмотра — 0 по умолчанию, для пустого массива ответ — -1
import assert from "power-assert";
import _ from "lodash";

const functions = {
  right1: (items, value, fromIndex = 0) => items.indexOf(value, fromIndex),
  wrong1: (items, value, fromIndex = 1) => items.indexOf(value, fromIndex),
  wrong2: (items, value, fromIndex) => {
    const index = items.indexOf(value, fromIndex);
    return index === -1 ? 0 : index;
  },
  wrong3: (items, value) => items.indexOf(value),
  wrong4: (items, value) => _.lastIndexOf(items, value),
};

const getFunction = () => {
  const name = process.env.FUNCTION_VERSION || "right1";
  return functions[name];
};

const indexOf = getFunction();

// test
assert(indexOf([1, 2, 1, 2], 2) === 1); // возвращает индекс первого вхождения
assert(indexOf([1, 2, 1, 2], 2, 2) === 3); // начиная поиск с индекса fromIndex
assert(indexOf([2, "one", "cat", false], 8) === -1); // возвращает -1, если нет вхождения
assert(indexOf([2, 2, 1, 2], 2) === 0); // значение которого по умолчанию равно нулю
assert(indexOf([], 8) === -1); // передача пустого массива

// example
// const array = [1, 2, 3];
// const zero = 0;
// const two = 2;

// assert(array.indexOf(zero) === two);
