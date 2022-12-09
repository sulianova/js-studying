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


