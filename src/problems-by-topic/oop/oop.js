//СДЕЛАТЬ РАЦИОНАЛЬНУЮ ДРОБЬ
const make = (numer, denom) => ({
  numer,
  denom,
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
    const newDenom = this.getDenom() * rational.getDenom();
    return make(newNumer, newDenom);
  },
});

export default make;

//BIND APPLY CALL

// Прямой запуск
printer.print(); // => "hello, Hexlet"

//setTimeout(printer.print, 1000);
setTimeout(() => printer.print('hi'), 1000);
setTimeout(printer.print.bind(printer, 'hello'), 1000);
printer.print.bind(printer,'hi')();

// func.apply(thisArg, [ argsArray])
print.apply(printer, ['hi']); // hi, Hexlet

// func.call([thisArg[, arg1, arg2, ...argN]])
print.call(printer, 'hi'); // hi, Hexlet


//НАПИСАТЬ ФУНКЦИЮ АНАЛОГ BIND
const obj = { number: 5 };
const fn = function fn(number) {
return number + this.number;
};

const bind = function (context, fn) {
  return function (...args) { // упаковка входных данных в массив
    return fn.apply(context, args);
  };
};


const bind = function (context, fn) {
  return function (...args) {
      return fn.call(context, ...args);
  };
};

const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8

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

//FILTER - ПОДНЯТЬ НА УРОВЕНЬ ВВЕРХ
function removeFirstLevel(arr) {
    return arr.filter((elem) => Array.isArray(elem)).flat(1);
}
  
const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1));
// Второй уровень тут: 5, 3, 4



//ФУНКЦИЯ С БЕСКОНЕЧНОЙ РЕКУРСИЕЙ

const magic = (...numbers) => {
  const sum = numbers.reduce((acc, x) => (x + acc), 0);
  const inner = (...rest) => magic(sum, ...rest);
  // функции - это объекты, что позволяет для "магического" метода установить свою функцию
  inner.valueOf = () => sum; // метод вызывается при сравнении, поэтому он возвращает только результат
  // подробнее о valueOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
  return inner;
};


console.log(magic() == 0); // true
magic(5, 2, -8) == -1; // true
magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true



  
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

const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
url.getHostName(); // 'yandex.ru'
url.getQueryParams();
// {
//   key: 'value',
//   key2: 'value2',
// };
url.getQueryParam('key'); // 'value'
// второй параметр - значение по умолчанию
url.getQueryParam('key2', 'lala'); // 'value2'
url.getQueryParam('new', 'ehu'); // 'ehu'
url.getQueryParam('new'); // null
url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
url.equals(new Url('http://yandex.ru:80?key=value')); // false

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


// const truncater = new Truncater();
// console.log(truncater.truncate('one two')); // 'one two'
// console.log(truncater.truncate('one two', { 'length': 6 })); // 'one tw...'
 
const truncater = new Truncater({ 'length': 6 });
console.log(truncater.truncate('one two', { 'separator': '.' })); // 'one tw.'
console.log(truncater.truncate('one two', { 'length': '3' })); // 'one...'

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

const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate('qwertyui')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }




//ГЛУБОКОЕ КОПИРОВАНИЕ
import isObject from 'lodash/isObject.js';

const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

export default cloneDeep;


//ПЕРЕВЕРНУТЬ СЕГМЕНТ
function getX() {
    return this.x;
};
  
function getY() {
    return this.y;
};
  
function Point (x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
};
  
function getBeginPoint() {
    return this.beginPoint;
};
  
function getEndPoint() {
    return this.endPoint;
};
  
function Segment (beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
    
};
  
  
function reverse(segment) {
    const beginPoint = segment.getBeginPoint();
    const endPoint = segment.getEndPoint();
    const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
    const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  
    return new Segment(newBeginPoint, newEndPoint);
};
  
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);
  
const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);
  
  // // прямое обращение к свойствам приведено только в демонстрационных целях
  // console.log(
  //   segment.beginPoint.x,
  //   segment.beginPoint.y,
  //   segment.endPoint.x,
  //   segment.endPoint.y,
  // );// => 1 10 11 -3
  
  // console.log(
  //   reversedSegment.beginPoint.x,
  //   reversedSegment.beginPoint.y,
  //   reversedSegment.endPoint.x,
  //   reversedSegment.endPoint.y,
// ); // => 11 -3 1 10

//ПРОТОТИПЫ

const date = new Date();
// Эта функция извлекает прототип объекта из самого объекта
const proto = Object.getPrototypeOf(date);
console.log(proto);


function Company(name) {
    this.name = name;
}

// Одно и то же, полученное разными способами
// Company.prototype === Object.getPrototypeOf(new Company())

Company.prototype.getName = function getName() {
    return this.name;
};

const company = new Company('Hexlet');
console.log(company.getName()); // => Hexlet

const company1 = new Company('Hexlet');
const company2 = new Company('Google');
company2.getName = function getName() {
  return 'Alphabet';
};

// Этот вызов возьмет свойство из самого объекта
console.log(company2.getName()); // Alphabet
// Этот вызов возьмет значение свойства из прототипа
console.log(company1.getName()); // Hexlet



function getName() {
    return this.name;
}

function Company(name) {
    this.name = name;
    this.getName = getName;
}


const company = new Company('Hexlet');
console.log(company.getName()); // => Hexlet

const company1 = new Company('Hexlet');
const company2 = new Company('Google');
company2.getName = function getName() {
  return 'Alphabet';
};

// Этот вызов возьмет свойство из самого объекта
console.log(company2.getName()); // Alphabet
// Этот вызов возьмет значение свойства из прототипа
console.log(company1.getName()); // Hexlet


//КОНВЕРТАЦИЯ ДЕНЕГ

const rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
};
  
function Money (value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}
  
Money.prototype.getValue = function getValue() {
    return this.value;
};
  
 Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};
  
Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
    const currency = this.getCurrency();
    const currentValue = this.getValue();
    if (currency === newCurrency) {
      return new Money(currentValue, currency);
    }
    const newValue = currentValue * rates[currency][newCurrency];
    return new Money(newValue, newCurrency);
};
  
Money.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const convertedMoney = money.exchangeTo(currency);
  const additionalValue = convertedMoney.getValue();
  return new Money(this.getValue() + additionalValue, currency);
};
  
Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};


//КОРЗИНА

import _ from 'lodash';

class Cart {
    constructor() {
      this.items = [];
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item, count) {
      const items = this.getItems();
      items.push({ item, count });
    }
  
    getCount() {
      //return _.sumBy(this.getItems(), (goods) => goods.count);
      return this.getItems().reduce((acc, { count }) => acc + count, 0);
    }
  
    getCost() {
      //return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
      return this.getItems().reduce((acc, {item, count }) => acc + item.price * count, 0);
    }
  
}
  
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems()); // 2
console.log(cart.getCost()); // 35
console.log(cart.getCount()); // 7

//TO STRING
//ТОЧКА

function Point(x, y) {
    this.x = x;
    this.y = y;
}
  
Point.prototype.getX = function getX() {
    return this.x;
};
  
Point.prototype.getY = function getY() {
    return this.y;
};
  
  
Point.prototype.toString = function toString() {
    return `(${this.x}, ${this.y})`;
};
  

//СЕГМЕНТ

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}
  
Segment.prototype.getBeginPoint = function getBeginPoint() {
    return this.beginPoint;
};
  
Segment.prototype.getEndPoint = function getEndPoint() {
    return this.endPoint;
};
  
Segment.prototype.toString = function toString() {
    return `[${this.beginPoint}, ${this.endPoint}]`;
};
  
  
const point1 = new Point(1, 10);
 console.log(point1.toString()); // => (1, 10)
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
   
const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
  

  
  
//MUTUAL FRIENDS
const makeUser = ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
});
  
const user1 = makeUser({
    friends: [
      makeUser({ id: 1 }),
      makeUser({ id: 2 }), // общий друг
    ],
});
  
const user2 = makeUser({
    friends: [
      makeUser({ id: 2 }), // общий друг
      makeUser({ id: 3 }),
    ],
});
  
  
const friends1 = user1.getFriends();
const friends2 = user2.getFriends();
const friends2Ids = friends2.map(({ id }) => id);
  
function getMutualFriends(user1, user2) {
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    const friends2Ids = friends2.map(({ id }) => id);
    return friends1.filter(({ id }) => friends2Ids.includes(id));
}
  
  
console.log(getMutualFriends(user1, user2)); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]
  
//ВЫВОД ВРЕМЕНИ
class Time {

    constructor(hours, minutes) {
      this.minutes = minutes;
      this.hours = hours;
    }
  
    toString() {
      return `${this.hours}:${this.minutes}`;
    }
  
    static fromString(str) {
      const [hours, minutes] = time.split(':');
      return new Time(hours, minutes);
    }
  
}
  
const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'
  
const time1 = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time1}`); // 'The time is 10:23'

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


