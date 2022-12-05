const scores = [
[3, 7],
[4, 1],
[4, 4],
[3, 5],
[4, 5],
[3, 2],
[4, 3],
[6, 5],
];

  
//РАСПРЕДЕЛИТЬ ЛЮДЕЙ ПО ВОЗРАСТАМ
//РЕШЕНИЕ 1
const users = [
    { name: 'Petr', age: 4 },
    { name: 'Igor', age: 19 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];
  
const usersByAge = {};
  for (const { age, name } of users) {
    // Проверяем добавлено ли уже свойство age в результирующий объект или нет
    if (!Object.hasOwn(usersByAge, age)) {
      usersByAge[age] = [];
    }
    usersByAge[age].push(name);
}
  
console.log(usersByAge);

//РАСПРЕДЕЛИТЬ ЛЮДЕЙ ПО ВОЗРАСТАМ
//РЕШЕНИЕ 2
const users = [
    { name: 'Petr', age: 4 },
    { name: 'Igor', age: 19 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];
  
// предварительно подготовим функцию-обработчик
const cb = (acc, user) => {
    if (!Object.hasOwn(acc, user.age)) {
      acc[user.age] = [];
    }
    acc[user.age].push(user.name);
    return acc; // обязательно вернуть!
};
  
// Начальное значение – пустой объект
const usersByAge = users.reduce(cb, {});
  
console.log(usersByAge);
  

//ОТСОРТИРОВАТЬ ПО ЧАСТОТЕ ВСТРЕЧАЕМОСТИ
function sortByCount(array){
  const valuesMap = new Map();
  array.forEach(elem => {
        valuesMap.set(elem, valuesMap.has(elem) ? valuesMap.get(elem) + 1 :  1);
  });
  const result =  [...valuesMap.entries()].sort((a, b) => b[1] - a[1]);
  return result.map(value => value[0]);
}

const array = [1, 2, 3, 3, 4, 9, 3, 4, 4, 5, 5, 5, 5];
console.log(sortByCount(array));



//РАСШИРЕНИЕ КЛАССА URL
import { URL as OldUrl} from 'url';


class Url extends OldUrl {
  constructor(url) {
    super(url);
    this.scheme = this.protocol.slice(0, -1);
    this.queryParams = Object.fromEntries(this.searchParams);
  }

  getScheme() {
    return this.scheme;
  }

  getHostName() {
    return this.hostname;
  }

  getQueryParams() {
    return this.queryParams;
  }

  getQueryParam(key, defaultValue = null) {
    return this.searchParams.get(key) ?? defaultValue;
  }

  equals(url) {
    return (this.toString() === url.toString());
  }

}


//TRUNCATE СО СТАТИЧНЫМИ ОПЦИЯМИ
class Truncater {
  static defaultOptions = {
    length: 200,
    separator: '...',
  };

  constructor(options = {} ) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  truncate(str, options = {}) {
    const { length, separator } = { ...this.options, ...options };
    return (str.length <= length) ? str : str.slice(0, length) + separator;
  }

}


//ВАЛИДАТОР ОШИБОК, КЛАСС КАК УСЛОВИЕ ДЛЯ ФУНКЦИИ

const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {

  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  }


  validate(password) {
    const errors = {};

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    return errors;
  }


}


//TRY CATCH
class ParseError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ParseError';
    }
}
  
function parseJson(json) {
    
    try {
    return JSON.parse(json);
    }
    
    catch (e) {
      throw new ParseError('Invalid JSON string');
    }
}
  
const json = '{ "key": "value" }';
console.log(parseJson(json)); // { key: 'value' }
   
const incorrectJson = '{ key": "value" }';
console.log(parseJson(incorrectJson)); // => ParseError: Invalid JSON string


