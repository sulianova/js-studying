// ТЕСТ ДЛЯ ФУНКЦИИ GET ИЗ LODASH

// function get
import _ from "lodash";

const functions = {
  right1: _.get,
  fail1: (obj = {}, key = null) => obj[key],
  fail2: (obj = {}, key = null, defaultValue = null) =>
    defaultValue || obj[key],
  fail3: (obj = {}, key = null, defaultValue = null) =>
    obj[key] && !defaultValue ? null : _.get(obj, key, defaultValue),
};

const getFunction = () => {
  const name = process.env.FUNCTION_VERSION || "right1";
  return functions[name];
};

const get = getFunction();

// test
if (get({ key: "value" }, "key") !== "value") {
  throw new Error("boom!");
}

if (get({}, "key", "value") !== "value") {
  throw new Error("boom!");
}

if (get({ key: "value" }, "key", "default value") !== "value") {
  throw new Error("boom!");
}

// example
get({ hello: "world" }, "hello"); // world
get({ hello: "world" }, "hello", "kitty"); // 'world'
get({}, "hello", "kitty"); // 'kitty'
