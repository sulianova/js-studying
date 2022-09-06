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




