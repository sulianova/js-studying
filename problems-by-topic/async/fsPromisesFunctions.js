import fsp from 'fs/promises';

// ЗАПИСАТЬ НОВЫЙ ФАЙЛ
export const touch = (txt) => fsp.access(txt).catch(() => {
  fsp.writeFile(txt, 'utf8');
});

// example
// touch('/Users/sofiyaulianova/Desktop/web-developer/JS').then(() => console.log('created!'));

// ПЕРЕВЕРНУТЬ СТРОКИ В ФАЙЛЕ
export const reverse = (txt) => fsp
  .readFile(txt, 'utf-8')
  .then((data1) => data1.split('\n').reverse().join('\n'))
  .then((data2) => fsp.writeFile(txt, data2, 'utf8'))
  .then(() => console.log('Success!'));

// example
// reverse('file.txt');

// ПЕРЕЗАПИСАЬ ФАЙЛ В ДРУГОЕ МЕСТО, УДАЛИТЬ СТАРЫЙ
export const move = (filepath1, filepath2, cb) => {
  fsp.readFile(filepath1, 'utf-8', (_error1, data1) => {
    if (_error1) {
      cb(_error1);
      return;
    }
    fsp.writeFile(filepath2, data1, 'utf8', (_error2) => {
      if (_error2) {
        cb(_error2);
        return;
      }
      fsp.unlink(filepath1, cb);
    });
  });
};

// example
// move('/opt/myfile', '/tmp/newfile', (error) => {
//   if (error) {
//     console.log('oops');
//     return;
//   }
//   console.log('yes!')
// });

// сравнивает размеры двух файлов и передает результат
// сравнения в переданную callback-функцию
export const compareFileSizes = (filepath1, filepath2, cb) => {
  fsp.stat(filepath1, (_error1, { size: size1 }) => {
    fsp.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};

// example
// compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));

// АСИНХРОННАЯ ФУНКЦИЯ, КОТОРАЯ ЗАПИСЫВАЕТ ДАННЫЕ И ОПОВЕЩАЕТ О ПРЕКРАЩЕНИИ РАБОТЫ
export function write(path, data, cb) {
  fsp.writeFile(path, data, 'utf8', cb);
}

// example
// write('./myfile', 'data', () => {
//     console.log('success');
//   });

// АСИНХРОННАЯ ФУНКЦИЯ, КОТОРАЯ ЧИТАЕТ ФАЙЛ И ВЫВОДИТ ЕГО СОДЕРЖИМОЕ
export function print(path) {
  const callback = (_error, data) => console.log(data);
  fsp.readFile(path, 'utf-8', callback);
}