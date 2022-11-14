// Вывести на экран строку
console.log('- Did Joffrey agree?\n- He did. He also said "I love using".');
// => - Did Joffrey agree?
//    - He did. He also said "I love using".

const who = "dragon's" + ' mother';
console.log(who);
// => dragon's mother

// Вывести на экран строку + переменную
const dollarsPerEuro = 1.25;
const rublesPerDollar = 60;

const dollarsCount = 50 * dollarsPerEuro; // 62.5
const rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log(`The price is ${rublesCount} rubles`);
// => The price is 3750 rubles

// Вывести на экран строку + переменную
const king = 'King Balon the 6th';
const numberOfCastles = 6;
const roomsInCastle = 17;

console.log(`${king} has ${numberOfCastles * roomsInCastle} rooms.`);
// => King Balon the 6th has 102 rooms.

// Вывести на экран строку + переменную
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`);
// => Do you want to eat, Arya?

// Вывести на экран строку из переменных
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);
// => hodor
// искать ответы: https://guides.hexlet.io/ru/how-to-search/?roistat_visit=2401939&_gl=1*v5d9u2*_ga*OTUyNDMwNDEwLjE2NTQ1MTMwNzA.*_ga_PM3R85EKHN*MTY1NTkyNzk3NS41LjEuMTY1NTkzMTg4NS41OQ..

// Последняя буква в строке
const nameRobb = 'Robb';
console.log(nameRobb[nameRobb.length - 1]);
// => b

// Методы выполняются слева направо
const companyHexlet = 'Hexlet';
console.log(companyHexlet.toLowerCase().toUpperCase());
// => HEXLET

// Преобразовать число в строку
const name = 'Tirion';
console.log(typeof name.length.toString());
// => 6

// Длина заданного участка строки после удаления лишних пробелов
const textForTrim = 'When \t\n you play a \t\n game of thrones you win or you die.';
// slice() отсчитывает с 0, последняя цифра не включается
console.log(textForTrim.slice(5, 15).trim().length);
// => 7

// Функция возвращает почту нижним шрифтом
export const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO';
  // обрезаем пробельные символы
  const trimmedEmail = email.trim();
  // приводим к lowercase
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // здесь будет запись в базу данных
};

saveEmail();
// => support@hexlet.io

// Функция возвращает сокращенное слово до n знаков с многоточием
export const truncate = (str, n) => {
  const result = `${str.slice(0, n)}...`;
  return result;
};

truncate('lamjhgfdss', 5);
// => lamjh...

// Функция возвращает сокращенное значение карты
export const getHiddenCard = (str, n = 4) => {
  const HiddenCard = '*'.repeat(n) + str.slice(str.length - 4, str.length);
  return HiddenCard;
};

getHiddenCard('1234567890', 2);
// => **7890

// Функция возвращает строку с заглавной первой буквой
export const capitalize = (str) => {
  const capitalizeStr = str[0].toUpperCase() + str.slice(1, str.length);
  return capitalizeStr;
};

capitalize('hello');
// => Hello

// Функция возвращает true/false, если в номере есть +
export const isInternationalPhone = (str) => {
  const firstLetter = str[0];
  return firstLetter === '+';
};

isInternationalPhone('89162380397');
// => false

// Функция говорит високосный год или нет
export const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

isLeapYear(2016);
// => true

// Вывести указанную букву слова или ''
export const getLetter = (str, n) => str[n - 1] || '';

getLetter('Hello', 3);
// => l

// Функция, которая для 666 выводит 'devil number', для 7 — 'prime number'
// для 42 – 'answer for everything', в остальных случаях — null
export const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    default:
      return null;
  }
};

getNumberExplanation(666);
// => devil number

// Функция печатает на экран числа до lastNumber
export const printNumbers = (lastNumber) => {
  let i = lastNumber;
  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
};

printNumbers(5);
// => 5
//    4
//    3
//    2
//    1
//    finished!

// Функция возвращает строку подряд идущих цифр от start до finish
export const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let str = '';
  while (i <= finish) {
    str += i;
    i += 1;
  }
  return str;
};

joinNumbersFromRange(1, 9);
// => 123456789

// Функция выводит подстроку
export const mySubstr = (str, n) => {
  let result = '';
  let i = 0;

  while (i < n) {
    result = `${result}${str[i]}`;
    i += 1;
  }

  return result;
};

mySubstr('Hello', 3);
// => Hel

// Функция считает количество вхождений буквы в строке
export const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char.toUpperCase() || str[i] === char.toLowerCase()) {
      count += 1;
    }

    i += 1;
  }

  return count;
};

countChars('HexlEt', 'e');
// => 2

// Напишите функцию makeItFunny(), которая принимает на вход строку
// и возвращает её копию, у которой каждый n-ный элемент
// переведен в верхний регистр. n – задается на входе в функцию.
export const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if ((i + 1) % n === 0) {
      result = `${result}${str[i].toUpperCase()}`;
    } else result = `${result}${str[i]}`;
    i += 1;
  }
  return result;
};

makeItFunny('I never look back', 3);
// => I NevEr LooK bAck

// Реализуйте функцию encrypt(), которая принимает
// на вход исходное сообщение и возвращает зашифрованное.
// Алгоритм шифрования: функция берет текст и переставляет
// в нем каждые два подряд идущих символа.
export const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};

encrypt('attack');
// => taatkc

//Реализуйте и экспортируйте по умолчанию функцию,
//которая переворачивает цифры в переданном числе и возвращает новое число.
export const reverseInt = (num) => {
  let result = '';
  const initialString = Math.abs(num).toString();
  const sign = num/Math.abs(num);

  for (const int of initialString) {
    result = `${int}${result}`;
  }

  return sign * Number(result);
};

reverseInt(-123); // -321

export const invertCase = (str) => {
  let result = '';
  for (const letter of str) {
    if (letter == letter.toUpperCase()) {
      result = `${result}${letter.toLowerCase()}`
    } else {result = `${result}${letter.toUpperCase()}`};
  }
  return result;
};

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
