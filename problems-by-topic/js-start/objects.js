// Добавить в объект новый ключ со значением
const staff = {
  'general director': {
    name: 'Belkin Igor',
    age: '45',
    married: true,
    children: false,
  },

  'product manager': {
    name: 'Eliseeva Helen',
    age: '35',
    married: false,
    children: ['Ivan', 'Alex'],
  },
};

staff['general director'].number = '88009870478';
staff['product manager'].number = '88009870000';

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая "нормализует" данные переданного урока.
      То есть приводит их к определенному виду. Нормализация происходит
      путём изменения исходного объекта.
      Функция должна обновлять содержимое урока по следующим правилам:
        Имя капитализируется.
        Весь текст описания приводится к нижнему регистру.
  */
// import _ from "lodash";

export const normalize = (data) => {
  data.name = _.capitalize(data.name);
  data.description = data.description.toLowerCase();
  return data;
};

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ друзей',
};

normalize(lesson);
// => { name: 'Деструктуризация', description: 'как удивить друзей' }

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая сравнивает объекты по совпадению данных,
      а не по ссылкам. Эта функция принимает на вход
      две компании и возвращает true, если их структура одинаковая,
      и false в обратном случае. Проверка должна проходить
      по свойствам name, state, website.
  */
export const is = (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};

const company1 = {
  name: 'Hexlet',
  state: 'moderating',
  website: 'https://hexlet.io',
};
const company2 = {
  name: 'CodeBasics',
  state: 'published',
  website: 'https://code-basics.com',
};

is(company1, company2);
// => false

/* Реализуйте и экспортируйте по умолчанию функцию,
  которая принимает на вход имя сайта и возвращает информацию о нем.
  Если домен передан без указания протокола, то по умолчанию берется http
  */
// import _ from 'lodash';

export const getDomainInfo = (domain) => {
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

getDomainInfo('https://hexlet.io');
// => { scheme: 'https', name: 'hexlet.io' }

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая считает количество слов в предложении,
      и возвращает объект. В объекте свойства — это слова
      (приведенные к нижнему регистру), а значения — это то,
      сколько раз слово встретилось в предложении.
      Слова в предложении могут находиться в разных регистрах.
      Перед подсчетом их нужно приводить в нижний регистр,
      чтобы не пропускались дубли.
  */
// import _ from 'lodash';

export const countWords = (str) => {
  const strLowerCase = str.toLowerCase();
  const words = _.words(strLowerCase);
  const result = {};

  for (const word of words) {
    if (Object.hasOwn(result, word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
    // result[word] = (result[word] ?? 0) + 1;
  }
  return result;
};

const text1 = 'another one sentence with strange Words words';
countWords(text1);
// => { another: 1, one: 1, sentence: 1, with: 1, strange: 1, words: 2 }

/*  Реализуйте и экспортируйте функцию,
      которая формирует из переданного объекта другой объект,
      включающий только указанные свойства. Параметры:
        Исходный объект
        Массив имен свойств
  */
export const pick = (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (Object.hasOwn(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};

const data2 = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data2, ['user']); // { user: 'ubuntu' }

/*  Реализуйте и экспортируйте функцию,
      которая извлекает из объекта любой глубины
      вложенности значение по указанным ключам. Параметры:
        исходный объект
        цепочка ключей (массив), по которой ведётся поиск значения
      В случае, когда добраться до значения невозможно, возвращается null.
  */
export const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (!Object.hasOwn(current, key)) {
      return null;
    }
    current = current[key];
  }

  return current;
};

const data3 = {
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

get(data3, ['user', 'ubuntu']); // null
get(data3, ['hosts', 1, 'name']); // 'web2'
get(data3, ['hosts', 0]); // { name: 'web1' }

// Альтернатива get в библиотеке lodash
// import _ from 'lodash';

// const obj = {};
// const value = _.get(obj, 'one.two.three', 'defaultValue'); // 'defaultValue'

// Альтернатива с try/catch
// const get = (data, keys) => {
//   let subData = data;

//   for (let i = 0; i < keys.length; i++) {
//     console.log(`Current subData is ${JSON.stringify(subData)}`);
//     console.log(`I = ${i}, key = ${keys[i]}`);
//     subData = getSubObject(subData, keys[i]);
//   }

//   return (subData == undefined)? null: subData;

//   function getSubObject(subData, key) {
//     try {
//       return subData[key];
//     } catch {
//       return null;
//     }
//   }
// };

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая заполняет объект данными из другого объекта
      по разрешенному списку ключей. Параметры:
        Исходный объект
        Список ключей которые нужно заменить
        Данные, которые нужно сливать в исходный объект
    В случае, когда список ключей пустой, нужно сливать все данные полностью.
  */
// import _ from 'lodash';

export const fill = (current, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(current, filteredData);
};

const company3 = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

fill(company3, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

// Реализуйте и экспортируйте функцию,
// которая выполняет глубокое копирование объектов.
export const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая создает объект компании и возвращает его.
      Для создания компании обязательно только одно
      свойство – имя компании. Остальные свойства
      добавляются только если они есть. Параметры:
        Имя
        Объект с дополнительными свойствами
      Также у компаний есть два свойства со значениями по умолчанию:
        state – moderating
        createdAt – текущая дата
  */
export const make = (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
};

make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

/*  Реализуйте и экспортируйте по умолчанию функцию,
      которая принимает на вход список пользователей,
      извлекает их имена, сортирует в алфавитном порядке
      и возвращает отсортированный список имен.
  */
export const getSortedNames = (users) => {
  const names = [];

  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
};

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']