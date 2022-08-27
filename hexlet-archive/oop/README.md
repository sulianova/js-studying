### Object oriented programming

#### getInvalidBooks
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список книг, находит среди них невалидные и возвращает их наружу.

Описания формата каждой книги:
* name – строка, обязательное
* author – строка, обязательное
* pagesCount – положительное число, необязательное
* link – строка url, необязательное, не может быть пустой строкой; ссылка на книгу в интернете
* genre – строка, необязательное; жанр книги. Должен входить в список определенный в файле index.js

Пример:
```
const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];
const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
```

#### normalize
Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран, нормализует их имена, сортирует города и группирует их по стране.

Пример:
```
const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
```