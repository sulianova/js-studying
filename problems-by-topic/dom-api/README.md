## JS: DOM API

### normalize
Извлеките содержимое тега `<body>` и оберните каждую строку в тег `<p>`. Получившееся тело вставьте обратно. Чтобы получить из содержимого `<body>` независимые строки, нужно разбить тело по переводу строки.

Было:
```
<body>
  one
  two
  three
</body>

```

Стало:
```
<body>
  <p>one</p>
  <p>two</p>
  <p>three</p>
</body>
```

### extractData
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход `document.documentElement`, извлекает из него параграфы и возвращает массив из их содержимого.

Пример:
```
const data = extractData(document.documentElement);
console.log(data);
// [
//   'First paragraph'
// ]
```

### extractData2
Реализуйте логику функции, которая принимает на вход document, извлекает из него данные и возвращает объект нужной структуры.

В примере выше "Category Name" - это заголовок категории, "Category Description" - описание категории и две статьи: "Article Name 1" с описанием "Article Description 1" и "Article Name 2" с описанием "Article Description 2".

Нужно сформировать объект, в котором статья описывается следующими свойствами:
* title - заголовок категории
* description - описание категории
* items - статьи

Структура каждой статьи определяется объектом со свойствами:
* title - заголовок статьи (берётся из ссылки статьи)
* description - описание статьи

Пример:
```
const data = extractData(document);
console.log(data);
// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
```

### prettify
Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) внутри элемента `<div>` и оборачивает текст в параграф. Переводы строк и отступы изменяться не должны.

Пример:
```
// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
```

### PATCH request
Обновить данные в браузере

```
PATCH /comments/3 HTTP/1.1
HOST: hexlet.local
Content-Length: 23
Content-Type: application/json

{ "text": "I got it!" }
```