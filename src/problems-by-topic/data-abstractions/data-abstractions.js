//FILTER - ПОДНЯТЬ НА УРОВЕНЬ ВВЕРХ
function removeFirstLevel(arr) {
    return arr.filter((elem) => Array.isArray(elem)).flat(1);
}
  
const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1));
// Второй уровень тут: 5, 3, 4

  
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