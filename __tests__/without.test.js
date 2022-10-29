import getFunction from '../src/problems-by-topic/atesting/without.js';

const without = getFunction();

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([2, 1, 2, 3], 5)).toEqual([2, 1, 2, 3]);
  expect(without([], 5)).toEqual([]);
});
