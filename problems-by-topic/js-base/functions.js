//ФУНКЦИИ
const run = (text) => {

    const takeLast = (str, length) => {
      if (str.length === 0 || str.length < length) {
        return null;
      }
  
      const strReverse = str.split("").reverse().join("");
  
      return strReverse.slice(0, length);
      
    }
  
    console.log(takeLast(text, 4));
};
  
run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx
  
import _ from 'lodash';
  
const takeOldest = (data, number = 1) => {
    const sorted = _.sortBy(data, (row) => Date.parse(row["birthday"]));
    //const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday)); 
    return sorted.slice(0,number);
};
  

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];
  
  
takeOldest(users, 3);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];

//FILTER - ПОДНЯТЬ НА УРОВЕНЬ ВВЕРХ
function removeFirstLevel(arr) {
    return arr.filter((elem) => Array.isArray(elem)).flat(1);
}
  
const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1));
// Второй уровень тут: 5, 3, 4


//MAP НАЙТИ ДЕТЕЙ В ОБЪЕКТЕ
const getChildren = (data) => {
    const childrens = data.map((data) => data.children);
    const result = childrens.flat();
    return result;
};
  
const users = [
    {
      name: 'Tirion',
      children: [
        { name: 'Mira', birthday: '1983-03-23' },
      ],
    },
    { name: 'Bronn', children: [] },
    {
      name: 'Sam',
      children: [
        { name: 'Aria', birthday: '2012-11-03' },
        { name: 'Keit', birthday: '1933-05-14' },
      ],
    },
    {
      name: 'Rob',
      children: [
        { name: 'Tisha', birthday: '2012-11-03' },
      ],
    },
];
   
console.log(getChildren(users));
// [
//     { name: 'Mira', birthday: '1983-03-23' },
//     { name: 'Aria', birthday: '2012-11-03' },
//     { name: 'Keit', birthday: '1933-05-14' },
//     { name: 'Tisha', birthday: '2012-11-03' }
// ]

//MAP FILTER ВЫВЕСТИ МАССИВ С ДЕВУШКАМИ
const getGirlFriends = (data) => {
    const friends = data.map((data) => data.friends);
    const girlFriends = friends.flat().filter((friends) => friends.gender === 'female');
    return girlFriends;
};
  
const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
];
   
 getGirlFriends(users);
  // [
  //   { name: 'Mira', gender: 'female' },
  //   { name: 'Aria', gender: 'female' },
  //   { name: 'Keit', gender: 'female' },
  // ];
  
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
  
//СГРУППИРОВАТЬ ПО СВОЙСТВУ
const groupBy = (users, property) => {
    console.log(users.reduce((acc, user) => {
      if (!Object.hasOwn(acc, user[property])) {
        acc[user[property]] = [];
      }
      acc[user[property]].push(user);
      return acc;
    }, {}));
  
};
  
  
const students = [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
    { name: 'Taywin', class: 'A', mark: 5 },
];
   
groupBy([], '');
groupBy([], 'class');
groupBy(students, 'class');
groupBy(students, 'mark');
groupBy(students, 'name');
  

//ПОСЧИТАТЬ СКОЛЬКО ПОЧТ СООТВЕТСТВУЕТ КАЖДОМУ БЕСПЛАТНОМУ ДОМЕНУ
import _ from 'lodash';
  
const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];
  
  
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
  
const getFreeDomainsCount = (emails) => emails
    .map((email) => {
      const [, domain] = email.split('@');
      return domain;
    })
    .filter((domain) => freeEmailDomains.includes(domain))
    .reduce((acc, domain) => {
      const count = _.get(acc, domain, 0) + 1;
      console.log(count);
      console.log(acc);
      acc = {...acc, [domain]: count };
      console.log(acc);
      //acc[domain] = count;
      return acc;
      // return {...acc, [domain]: count };
}, {});
  
console.log(getFreeDomainsCount(emails));
  // {
  //   'gmail.com': 3,
  //   'yandex.ru': 2,
  //   'hotmail.com': 2,
// };

//ПОСЧИТАТЬ СУММУ ПОСЛЕДОВАТЕЛЬНОСТИ
const sequenceSum = (begin, end) => {
    if (begin > end) {
      return NaN;
    }
    if (begin === end) {
      return begin;
    }
    return begin + sequenceSum(begin + 1, end);
};


//ПОСЧИТАТЬ РАССТОЯНИЕ МЕЖДУ ТОЧКАМИ
const calculateDistance = (point1, point2) => {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    return Math.sqrt((x2 - x1)**2 + (y2-y1)**2);
};
  
point1 = [0, 0];
point2 = [3, 4];
console.log(calculateDistance(point1, point2)); // 5
  

//ПОСЧИТАТЬ КООРДИНАТЫ СРЕДНЕЙ ТОЧКИ
const getMidpoint = (point1, point2) => {
    const result = {};
  
    result.x = (point1.x + point2.x) / 2;
    result.y = (point1.y + point2.y) / 2;
    return result;
  
};
  
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
  
console.log(point3); // => { x: 2, y: 2 };
  

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

