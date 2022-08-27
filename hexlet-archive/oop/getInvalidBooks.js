// ВАЛИДАТОР YUP
import yup from 'yup';

const genres = ['drama', 'horror', 'fantasy', 'classic'];

export default (books) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive(),
    link: yup.string().min(1).url(),
    genre: yup.string().oneOf(genres),
  });

  return books.filter((book) => !schema.isValidSync(book));
};

// example
// const books1 = [
//     {
//       name: 'besi',
//       author: 'dostoevski',
//       pagesCount: 100,
//       genre: 'drama',
//       link: 'https://some.ru',
//     },
//     {
//       name: 'book',
//       author: 'author',
//     },
//     {
//       name: 'book 2',
//       author: 'author 2',
//       genre: 'drama',
//       pagesCount: '50 страниц', // должно быть числом
//     },
//     {
//       name: 'book 3',
//       author: 'author 3',
//       genre: 'fantasy',
//       pagesCount: -5, // должно быть положительным числом
//     },
// ];

// const invalidBooks = getInvalidBooks(books1); // [{ author: 'author 2' }]
// console.log(invalidBooks);
