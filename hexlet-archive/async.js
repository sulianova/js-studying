//ИЩЕМ БИТЫЕ ССЫЛКИ

import { URL } from 'url';
import axios from 'axios';
import { startsWith } from 'lodash';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

export default async (initialLink) => {
    const response = await axios.get(initialLink);
    const links = extractLinks(response.data);
    const promises = links.map((link) => axios.get(link).then(() => null).catch(() => link));
    const results = await Promise.all(promises);
    return results.filter((result) => result !== null);
  };


const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);


//ОБМЕНЯТЬ ДАННЫЕ В ДВУХ ФАЙЛАХ

import fs from 'fs/promises';

const exchange = async (path1, path2) => {
  const promise1 = fs.readFile(path1, 'utf-8');
  const promise2 = fs.readFile(path2, 'utf-8');
  const [data1, data2] = await Promise.all([promise1, promise2]);
  await fs.writeFile(path1, `${data2}`);
  await fs.writeFile(path2, `${data1}`);
};

exchange('/myfile1', '/myfile2');

//ТАЙМЕР
export const wait = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
};
  
  
// export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  
wait(1000).then(() => console.log('time is over!'));

const myFunc = (str) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        try {
          str.toLowerCase();
          resolve();
  
        } catch (e) {
          // throw new Error(e);
          reject(e);
        }
      }, 3000);
    });
};
  
myFunc(6789)
    .then(() => console.log('success'))
    .catch(() => console.log('error'));

//считает размер переданной директории не включая поддиректории
import path from 'path';
import _ from 'lodash';
import fs from 'fs/promises';

export const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath, 'utf-8').then((files) => {
    const promises = files.map((name) => fs.stat(path.join(dirpath, name)));
    return Promise.all(promises);
    });

  return promise.then((stats) =>  _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};

// export const getDirectorySize = (dirpath) => {
//   const promise = fs.readdir(dirpath).then((filenames) => {
//     const filepaths = filenames.map((name) => fs.stat(path.join(dirpath, name)));
//     const promises = filepaths.map(fs.stat);
//     return Promise.all(promises);
//   });

//   return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
// };

getDirectorySize('/usr/local/bin').then(console.log);


//ПРОВЕРИТЬ ФАЙЛ ИЛИ ДИРЕКТОРИЯ, ВЫВЕСТИ ОТВЕТ В МАССИВ
import fs from 'fs/promises';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {

  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([])
  );
  return resultPromise;
};

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]


//ЗАПИСАТЬ НОВЫЙ ФАЙЛ
import fsp from 'fs/promises';

const touch = (txt) => {
  return fsp.access(txt)
    .catch(() => {
      fsp.writeFile(txt, 'utf8');
    });
};

touch('/Users/sofiyaulianova/Desktop/web-developer/JS').then(() => console.log('created!'));




//ПЕРЕВЕРНУТЬ СТРОКИ В ФАЙЛЕ

import fs from 'fs/promises';

const reverse = (txt) => {
  return fs.readFile(txt, 'utf-8')
    .then((data1) => data1.split("\n").reverse().join("\n"))
    .then((data2) => fs.writeFile(txt, data2, 'utf8'))
    .then(() => console.log("Success!"));
};

reverse('file.txt');

//считает размер переданной директории не включая поддиректории
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, files) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = files.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
      });
    });
};

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});



//ПЕРЕЗАПИСАЬ ФАЙЛ В ДРУГОЕ МЕСТО, УДАЛИТЬ СТАРЫЙ
import fs from 'fs';

const move = (filepath1, filepath2, cb) => {
  fs.readFile (filepath1, 'utf-8', (_error1, data1) => {
    if (_error1) {
      cb(_error1);
      return;
    }
    fs.writeFile(filepath2, data1, 'utf8',(_error2) => {
      if (_error2) {
        cb(_error2);
        return;
      }
      fs.unlink(filepath1, cb);
    });
  });
};

move('/opt/myfile', '/tmp/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!')
});

//сравнивает размеры двух файлов и передает результат 
//сравнения в переданную callback-функцию
import fs from 'fs';
const compareFileSizes = (filepath1, filepath2, cb) => {
    fs.stat(filepath1, (_error1, { size: size1 }) => {
      fs.stat(filepath2, (_error2, { size: size2 }) => {
        cb(null, Math.sign(size1 - size2));
      });
    });
};

compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));


//АСИНХРОННАЯ ФУНКЦИЯ, КОТОРАЯ ЗАПИСЫВАЕТ ДАННЫЕ И ОПОВЕЩАЕТ О ПРЕКРАЩЕНИИ РАБОТЫ
import { writeFile } from 'fs';

function write(path, data, cb) {
    fs.writeFile(path, data, 'utf8', cb);
    
}

write('./myfile', 'data', () => {
    console.log('success');
  });

//АСИНХРОННАЯ ФУНКЦИЯ, КОТОРАЯ ЧИТАЕТ ФАЙЛ И ВЫВОДИТ ЕГО СОДЕРЖИМОЕ
import fs from 'fs';

function print(path) {
    const callback = (_error, data) => console.log(data);
    fs.readFile(path, 'utf-8', callback);
}