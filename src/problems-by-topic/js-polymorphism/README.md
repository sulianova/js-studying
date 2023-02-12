## JS: Polymorphism

### linkedList
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход односвязный список и переворачивает его.

Примеры
```
import Node from './Node';
import reverse from './linkedList';
 
const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
const reversedNumbers = reverse(numbers); // (3, 2, 1)
```

### getLinks
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список тегов, находит среди них теги a, link и img, а затем извлекает ссылки и возвращает список ссылок. Теги подаются на вход в виде массива, где каждый элемент это тег. Тег имеет следующую структуру:
* name — имя тега.
* href или src — атрибуты. Атрибуты зависят от тега: тег img имеет атрибут src, тег a — href, link — href.

Примеры
```
import getLinks from './html.js';
 
const tags = [
  { name: 'img', src: 'hexlet.io/assets/logo.png' },
  { name: 'div' },
  { name: 'link', href: 'hexlet.io/assets/style.css' },
  { name: 'h1' },
];
 
const links = getLinks(tags);
// [
//   'hexlet.io/assets/logo.png',
//   'hexlet.io/assets/style.css'
// ];
```

### stringify
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход тег и возвращает его текстовое представление.

Примеры
```
import stringify from './html.js';
 
const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html = stringify(hrTag); // <hr class="px-3" id="myid">
 
const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html = stringify(divTag); // <div id="wow">text2</div>
 
const emptyDivTag = {
  name: 'div',
  tagType: 'pair',
  body: '',
  id: 'empty',
};
const html = stringify(emptyDivTag); // <div id="empty"></div>
```

Примечания
В структуре тега есть три специальных ключа:
* name — имя тега.
* tagType — тип тега, определяет его парность (pair) или одиночность (single).
* body — тело тега, используется для парных тегов. Если у парного тега нет содержимого, то body равно пустой строке ''.
Всё остальное становится атрибутами тега и не зависит от того, парный он или нет.