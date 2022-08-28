### JS: DOM API

#### normalize
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

#### PATCH request
Обновить данные в браузере

```
PATCH /comments/3 HTTP/1.1
HOST: hexlet.local
Content-Length: 23
Content-Type: application/json

{ "text": "I got it!" }
```