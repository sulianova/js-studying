import getFunction from '../src/problems-by-topic/atesting/get.js';

const get = getFunction();

test('get', () => {
  expect(get({ key: 'value' }, 'key')).toEqual('value');
  expect(get({}, 'key', 'value')).toEqual('value');
  expect(get({ key: 'value' }, 'key', 'default value')).toEqual('value');
});

// if (get({ key: "value" }, "key") !== "value") {
//   throw new Error("boom!");
// }

// if (get({}, "key", "value") !== "value") {
//   throw new Error("boom!");
// }

// if (get({ key: "value" }, "key", "default value") !== "value") {
//   throw new Error("boom!");
// }
