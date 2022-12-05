const make = (nameA, aa) => {
  return {
    nameA,
    aa,
    callback(key) {
      this[key] = this[key].split('').reverse().join('');
    }
  };
};

const objects = make('Karl', 'Mia');

const each = (objects, funcName) => {
  const keys = Object.keys(objects);
  keys.filter(key => key !== funcName).map(key => objects[funcName](key));
};

each(objects, 'callback');

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];