

console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');


let who = "dragon's" + ' mother';
console.log(who);



let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = 50 * dollarsPerEuro; // 62.5
let rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log('The price is ' + rublesCount + ' rubles');
// => The price is 3750 rubles




const king = 'King Balon the 6th';
const numberOfCastles = 6;
const roomsInCastle = 17;

console.log(king + ' has ' + numberOfCastles*roomsInCastle + ' rooms.');



const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`);

console.log(-0.304);



const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`);


import length from './src/string.js';



const text = 'Never forget what you are, for surely the world will not';
console.log(text[0]);

//искать ответы: https://guides.hexlet.io/ru/how-to-search/?roistat_visit=2401939&_gl=1*v5d9u2*_ga*OTUyNDMwNDEwLjE2NTQ1MTMwNzA.*_ga_PM3R85EKHN*MTY1NTkyNzk3NS41LjEuMTY1NTkzMTg4NS41OQ..



const name = 'Robb';
console.log(name[name.length-1]);



let company = 'Hexlet';
console.log(company.toLowerCase().toUpperCase());


//число в строку
const name = 'Tirion';
console.log(typeof name.length.toString());


//длина заданного участка строки после удаления лишних пробелов
const text = 'When \t\n you play a \t\n game of thrones you win or you die.';

console.log(text.slice(5,15).trim().length);



const text = 'Whenyouplay';
console.log(text.slice(5,7));


//функция возвращает почту нижним шрифтом
const saveEmail = () => {
    // В реальности email приходит из формы
    const email = "  SuppORT@hexlet.IO";
    // обрезаем пробельные символы
    const trimmedEmail = email.trim();
    const preparedEmail = trimmedEmail.toLowerCase();
    console.log(preparedEmail);
    // здесь будет запись в базу данных
  };

  saveEmail();



//функция возвращает сокращенное слово до n знаков с многоточием
const truncate = (str,n) => {
    const result = str.slice(0,n) + "...";
    return result;
};

const y = truncate("lamjhgfdss",5);
console.log(y)

export default truncate;

 
//функция возвращает сокращенное значение карты
const getHiddenCard = (str, n = 4) =>{
const HiddenCard = "*".repeat(n) + str.slice(str.length-4,str.length);
return HiddenCard;
};

const x = getHiddenCard('1234567890',2);
console.log(x);

export default getHiddenCard;

//функция возвращает строку с заглавной первой буквой
const capitalize = (str) => {
const capitalizeStr = str[0].toUpperCase() + str.slice(1,str.length);
return capitalizeStr;
};

const x = capitalize('hello');
console.log(x);

export default capitalize;

//функция возвращает TRUE/FALSE, если в номере есть +
const isInternationalPhone = (str) => {
    const firstLetter = str[0];
    return firstLetter === "+";
};

const x = isInternationalPhone('89162380397');
console.log(x);

export default isInternationalPhone;


//функция говорит високосный год или нет
const isLeapYear = (year) => year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0);

const x = isLeapYear(2016);
console.log(x);

export default isLeapYear;


//Вывести указанную букву слова или ''
const getLetter = (str,n) => str[n-1] || '';

const x = getLetter ('Hello',6);
console.log(x);

export default getLetter;

//Вывести адрес в правильном виде
const normalizeUrl = (str) => {
    if (str.startsWith('https://')) {
        return str}
    return 'https://' +str;
 };

 const x = normalizeUrl ('https://jfhfjfk');
 console.log(x);

export default ormalizeUrl;


const convertText = (str) => {
    if (str === "") {
        return "";
    }    
    return (str[0] === str[0].toUpperCase()) ? str : reverse(str);
};

const x = convertText('hello');
console.log(x);

export default convertText;



const getNumberExplanation = (number) => {
    let result;
    if (number === 666) {
        result = "devil number";
    }
    else if (number === 42) {
        result = "answer for everything";
    }
    else if (number === 7) {
        result = "prime number";
    }

    else result = null;
return result;
};

const x = getNumberExplanation(0);
console.log(x);

const getNumberExplanation = (number) => {
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

export default getNumberExplanation;



const printNumbers = (lastNumber) => {
    let i = lastNumber;
    while (i >= 1) {
        console.log(i);
        i -= 1;
    }
    console.log("finished!");
};

const x = printNumbers(5);

export default printNumbers;


const joinNumbersFromRange = (start, finish) => {
    let i = start;
    let str = "";
    while (i <= finish) {
        str += i;
        i += 1;
    }
    return str;
};

const x = joinNumbersFromRange(1,9);
console.log(x);

export default joinNumbersFromRange;



const mySubstr = (str, n) => {
    let result = "";
    let i = 0;

    while (i < n) {
        result = `${result}${str[i]}`;
        i += 1;
    }

    return result;
};

console.log(mySubstr("Hello", 3));



const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if ((str[i] === char.toUpperCase()) || (str[i] === char.toLowerCase())) {
        count += 1;
        }
        i += 1;
    }
    return count;
};

console.log(countChars('HexlEt', 'e'));

export default countChars;



const makeItFunny = (str, n) => {
    let i =0;
    let result = "";
    while (i < str.length) {
        if ((i + 1) % n === 0) {
            result = `${result}${str[i].toUpperCase()}`;
        }
        else result = `${result}${str[i]}`;
        i +=1;
    }
    return result;
};

console.log(makeItFunny('I never look back',3));

export default makeItFunny;

 


const encrypt = (str) => {
    let result = "";

    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i += 2) {
            result = `${result}${str[i+1]}${str[i]}`;
         }
    }

    else {
         for (let i = 0; i < (str.length - 1); i += 2) {
             result = `${result}${str[i+1]}${str[i]}`;
         }
         result = `${result}${str[str.length - 1]}`;
        }

    return result;
};

const encrypt = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
      const nextSymbol = str[i + 1] || '';
      result = `${result}${nextSymbol}${str[i]}`;
    }
  
    return result;
  };


console.log(encrypt('go!'));

export default encrypt;



const getTriangleArea = (h, b) => 1 / 2 * h * b;

console.log(getTriangleArea(5,10));



const getWeekends = (a='long') => {
    let weekends = "";
    if (a === 'long') {
        weekends = ['saturday', 'sunday'];
    }
    else if (a === 'short') {
        weekends = ['sat', 'sun'];
    }
     return weekends;
 };

export default getWeekends;

const x = getWeekends();

console.log(x);

const getWeekends = (format) => {
    const longFormat = ['saturday', 'sunday'];
    const shortFormat = ['sat', 'sun'];
  
    switch (format) {
      case 'long':
        return longFormat;
      case 'short':
        return shortFormat;
      default:
        return longFormat;
    }
};

 

export const swap = (m) => {
    const firstItem = m[0];
    const lastItem = m[m.length -1];
    let result = "";

    if (m.length >= 2) {
       m[0] = lastItem;
       m[m.length -1] = firstItem;
       return m;
    }
    else return m;
};

const x = swap(['one', 'two', 'three']);
console.log(x);



const get = (items, index, param=null) => {
    if (index < items.length && index >= 0) {
        return items[index];
      }
    else return param;
};


const cities = ['moscow', 'london', 'berlin', 'porto'];
const x = get(cities, 7);
console.log(x);

export default get;





const addPrefix = (items, str) => {
    const result = [];
    for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        const newItem = `${str} ${item}`;
        result[i] = newItem;
      }
    return result;
};
const names = ['john', 'smith', 'karl'];

const x = addPrefix(names, 'Mr');

console.log(x);
console.log(names);

const str = 'Mr';
const item = 'john'
const x = `${str} ${item}`;
console.log(x);

export default addPrefix;



const reverse = (items) => {
    const result = [];
    for (let i = 0; i < items.length/2; i += 1) {
        result[i] = items[items.length -1 - i];
        result[items.length - 1 - i] = items[i];
      }
    return result;  
};

const names = ['john', 'smith', 'karl'];
 
const x = reverse(names);
console.log(x);
console.log(names);



const reverse = (items) => {
    const result = [];
    for (let i = 0; i < items.length/2; i += 1) {
        result[i] = items[items.length -1 - i];
        result[items.length - 1 - i] = items[i];

        items[i] = result[i];
        items[items.length - 1 - i] = result[items.length - 1 - i];
      }
    return result;  
};

const names = ['john', 'smith', 'karl'];
 
const x = reverse(names);
console.log(x);
console.log(names);



const calculateSum = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i += 1) {
        if (items[i] % 3 === 0) {
            sum += items[i];
        }
      }
    return sum;
};

export default calculateSum;




const calculateAverage = (items) => {
    let sum = 0;
    let average = null;

    for (const item of items) {
        sum += item;
    }

    if (items.length !== 0) {
        average = sum / items.length;
    }
    
    return average;
    
};

export default calculateAverage;

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
const temperatures2 = [36, 37.4, 39, 41, 36.6];
const temperatures = [];
calculateAverage(temperatures2);



const getSameParity = (items) => {
    const result =[];

    if (items[0] % 2 == 0) {
        for (const item of items) {

            if (item % 2 === 0) {
            result.push(item);
            }

        }
    
    }

    else {
        for (const item of items) {

        if (item % 2 !== 0) {
        result.push(item);
        }

    }

    }

    return result;
};

export default getSameParity;

const x = getSameParity([2, 2, 8]);
console.log(x);



const getTotalAmount = (items, str) => {
    let sum = 0;
        for (const item of items) {

            if (str === item.slice(0,3)) {
            sum += Number(item.slice(3));
            }

        }
    return sum;
};

export default getTotalAmount;

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];  
const x = getTotalAmount(money3, 'rub');
console.log(x);



const buildDefinitionList = (dictionary) => {
    const description = [];
    const definition = [];
    const dictionaryHtml = [];
    let result = [];

    if (dictionary.length === 0) {
    return result = "";
    }

    else {
    for (let i = 0; i < dictionary.length; i += 1) {
        definition.push(`<dt>${dictionary[i][0]}</dt>`);
        description.push(`<dd>${dictionary[i][1]}</dd>`);
        dictionaryHtml.push(`${definition[i]}${description[i]}`);
      }
    
    const dictionaryHtmlStr = dictionaryHtml.join('');
    result = `<dl>${dictionaryHtmlStr}</dl>`;
    return result;
    }
};

const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

const definitions1 = [];

const x = buildDefinitionList(definitions1);
console.log(x);

export default buildDefinitionList;



function makeCensored(str, value) {
    const arr = str.split(' ');
    const newArr = [];
    for (const word of arr) {
     if (value.includes(word)) {
        newArr.push('$#%!');
      } else {
        newArr.push(word);
      }
    }
    return newArr.join(' ');
  }

  export default makeCensored;




const _ = require("lodash");

const getSameCount = (array1, array2) => {
    let result = 0;
    const array1Uniq = _.uniq(array1);
    const array2Uniq = _.uniq(array2);

    for (const item of array1Uniq) {
        array2Uniq.includes(item) ? result += 1 : result;
    }
    return result;
};

getSameCount([], []);

export default getSameCount;



const _ = require("lodash");

const countUniqChars = (str) => {
    const array = str.split("");
    const result = _.uniq(array);
    return result.length;
};

export default countUniqChars;

const text1 = 'yyab'; // y, a, b
const text2 = 'You know nothing Jon Snow';
const text3 = '';
countUniqChars(text3); 



// Функция изменяет входящий массив coll

const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    // Объявляем переменную swapped, значение которой показывает был ли
    // совершен обмен элементов во время перебора массива
    let swapped;
    // do..while цикл. Работает почти идентично while
    // Разница в проверке. Тут она делается не до выполнения тела, а после.
    // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
    do {
      swapped = false;
      // Перебираем массив и меняем местами элементы, если предыдущий
      // больше, чем следующий
      for (let i = 0; i < stepsCount; i += 1) {
        if (coll[i] > coll[i + 1]) {
          // temp – временная константа для хранения текущего элемента
          const temp = coll[i];
          coll[i] = coll[i + 1];
          coll[i + 1] = temp;
          // Если сработал if и была совершена перестановка,
          // присваиваем swapped значение true
          swapped = true;
        }
      }
      // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
      // в конце массива
      stepsCount -= 1;
    } while (swapped); // продолжаем, пока swapped === true
  
    return coll;
  };

export default bubbleSort;

console.log(bubbleSort([3, 2, 10, -2, 0]));



const checkIsBalanced = (expression) => {
    // Инициализация стека
    const stack = [];
    // Проходим по каждому символу в строке
    for (const symbol of expression) {
      // Смотрим открывающий или закрывающий
      if (symbol === '(') {
        stack.push(symbol);
      } else if (symbol === ')') {
        // Если для закрывающего не нашлось открывающего, значит баланса нет
        if (!stack.pop()) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };

const x = "()()()()()()()()())";

console.log(checkIsBalanced(x));






function isBalanced(brackets) {
  const stack = [];
  const openingSymbols = ['(', '[', '{', '<'];
  const closingSymbols = [')', ']', '}', '>'];

  for (let bracket of brackets) {
    if (openingSymbols.includes(bracket))
      stack.push(bracket);
    else {
      if (stack.length <= 0)
        return false;
      else if (!(closingSymbols.indexOf(bracket) == openingSymbols.indexOf(stack[stack.length - 1])))
        return false;
      else
        stack.pop();
    }
  }

  if (stack.length <= 0)
    return true;
  else
    return false;
}

export default isBalanced;




const _ = require("lodash");
const getIntersectionOfSortedArrays = (array1, array2) =>{
    const filteredArray = array1.filter(value => array2.includes(value));
    return _.uniq(filteredArray);
}

export default getIntersectionOfSortedArrays;

const x = getIntersectionOfSortedArrays([], [2]);
console.log(x);

  

export const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
      return null;
    }
  
    let [nearestLocation] = locations;
    const [, nearestPoint] = nearestLocation;
    let lowestDistance = getDistance(currentPoint, nearestPoint);
  
    for (const location of locations) {
      const [, point] = location;
      const distance = getDistance(currentPoint, point);
      if (distance < lowestDistance) {
        lowestDistance = distance;
        nearestLocation = location;
      }
    }
  
    return nearestLocation;
  };



export const getMax = (array) => {
    if (array.length === 0) {
        return null;
    }
    else {
        let max = array[0];
        for (const item of array) {
            (item > max) ? max = item : max;
        }

        return max;
    }
}

getMax([1, 10, 8]); 




export default () => {
    const obj = {
      files: ['src/objects.js'],
      config: true,

    };
    return obj;
  };



const staff = {
    'general director': {
        name: "Belkin Igor",
        age: "45",
        married: true,
        children: false,
    },

    'product manager': {
        name: "Eliseeva Helen",
        age: "35",
        married: false,
        children: ['Ivan', 'Alex'],
    }
}

console.log(staff);

staff['general director'].number = '88009870478';
staff['product manager'].number = '88009870000';

console.log(staff);



const _ = require("lodash");

const normalize = (data) => {
    data.name = _.capitalize(data.name);
    data.description = data.description.toLowerCase();
    return data;
};

export default normalize;

const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК удивитЬ друзей',
  };

normalize(lesson);

console.log(lesson);



export default (company1, company2) => {
    const keys = ['name', 'state', 'website'];
    for (const key of keys) {
      if (company1[key] !== company2[key]) {
        return false;
      }
    }
  
    return true;
  };

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };


console.log(company1["name"] === company2["name"]);



const _ = require("lodash");

const getDomainInfo = (siteName) => {
    let scheme = "";
    const name = _.last(siteName.split('/'));

    if ( siteName.startsWith('h') === false ) {
        scheme = 'http';
    }
    else {
        scheme = siteName.split(':')[0];    
    }
   
    const info = { scheme, name, };
    console.log(info);
};

getDomainInfo('https://hexlet.io');

export default (domain) => {
    let scheme = '';
    if (domain.startsWith('https://')) {
      scheme = 'https';
    // else if другие протоколы
    } else {
      scheme = 'http';
    }
  
    const name = domain.replace(`${scheme}://`, '');
  
    return { scheme, name };
  };



const _ = require("lodash");

const countWords = (str) => {
    const strLowerCase = str.toLowerCase();
    const words = _.words(strLowerCase);
    const result ={};

    for (const word of words) {

        if (Object.hasOwn(result, word)) {
            result[word] += 1;
          } else {
            result[word] = 1;
          }

    }
    return result;
};

export default countWords;

const text1 = 'another one sentence with strange Words words';
countWords(text1);

export default (sentence) => {
    const words = _.words(sentence);
    const result = {};
    for (const word of words) {
      const lowerWord = word.toLowerCase();
      result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }
  
    return result;
  };

  

export default (data, keys) => {
  const result = {};
  
  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }
  
  return result;
};


const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    const hasProperty = Object.hasOwn(current, key);
    if (!hasProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
};

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};


 
console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false




function get(data, keys) {
  let subData = data;

  for (let i = 0; i < keys.length; i++) {
    console.log(`Current subData is ${JSON.stringify(subData)}`);
    console.log(`I = ${i}, key = ${keys[i]}`);
    subData = getSubObject(subData, keys[i]);
  }

  return (subData == undefined)? null: subData;
  
  function getSubObject(subData, key) {
    try {
      return subData[key];
    } catch {
      return null;
    }
  }
}

const _ = require("lodash");

const fill = (current, keys, data) => {
  if (keys.length === 0) {
    Object.assign(current, data);
  }
  
  else {
    const property = _.pick(data, keys);
    Object.assign(current, property);
  }

}

const company = {
  name: null,
  state: 'moderating',
};
 
const data = {
  name: 'Hexlet',
  state: 'published',
};

 
fill(company, ['name'], data);
console.log(company);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }
 
fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }

const keys = [];
console.log(keys.length === 0);



const make = (nameCompany, object) => {
  const data = Date.now();
  const company = {name: nameCompany, state: 'moderating', createdAt: data, ...object};
  return company;
}

export default make;

const make = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
};

const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

console.log(company);

const _ = require("lodash");

const average = (...rest) => {

  let resultAverage = 0;

  if (rest.length !== 0) {
    resultAverage = _.sum(rest)/rest.length;
  }
  else resultAverage = null;

  return resultAverage;
}

average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null


const run = (text) => {

  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
    
  }

  return takeLast(text, 4);
}









