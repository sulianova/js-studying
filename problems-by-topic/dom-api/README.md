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

### normalize2
Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием `kebab` нотации, в `camelCase` нотацию: `text-center => textCenter`.

Пример:
```
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>
```

### app
В этом упражнении нужно реализовать логику добавления алертов по клику на кнопку.
Изначально на странице есть одна кнопка. Вёрстка выглядит так:

```
<button id="alert-generator" class="btn btn-primary">Generate Alert</button>
<div class="alerts m-5"></div>
```

После клика на кнопку, в контейнер с классом alerts добавляется алерт, с названием Alert 1:

```
<div class="alerts m-5">
  <div class="alert alert-primary">Alert 1</div>
</div>
```

Последующий клик добавляет новый алерт сверху:

```
<div class="alerts m-5">
  <div class="alert alert-primary">Alert 2</div>
  <div class="alert alert-primary">Alert 1</div>
</div>
```

Каждый клик добавляет новый алерт, меняя число в его имени.

### app2
Реализуйте логику переключения табов. По клику на таб происходит следующее:
* Класс `active` снимается с текущего элемента меню и активного блока с данными.
* Класс `active` добавляется табу, по которому кликнули и соответствующему блоку с данными.

Сопоставление таба и блока данных идёт по идентификатору, который прописывается в атрибут `data-bs-target` табов. По клику на таб, код должен извлечь `id`, найти соответствующий элемент и сделать его активным, не забыв при этом снять класс `active` с таба и блока, которые были активными до клика.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.

### PATCH request
Обновить данные в браузере

```
PATCH /comments/3 HTTP/1.1
HOST: hexlet.local
Content-Length: 23
Content-Type: application/json

{ "text": "I got it!" }
```