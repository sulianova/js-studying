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

### DatabaseConfigLoader
Реализуйте и экспортируйте по умолчанию класс DatabaseConfigLoader, который отвечает за загрузку конфигурации для базы данных. У класса следующий интерфейс:

* Конструктор - принимает на вход путь, по которому нужно искать конфигурацию
* load(env) - метод, который грузит конфигурацию для конкретной среды окружения. Он загружает файл database.${env}.json, парсит его и возвращает результат наружу.

Пример:
```
const pathToConfigs = path.join(__dirname, '__fixtures__');
const loader = new DatabaseConfigLoader(pathToConfigs);
const config = loader.load('production'); // loading database.production.json
// {
//   host: 'google.com',
//   username: 'postgres',
// };
```

В этом классе и конфигурации реализована поддержка расширения. Если в загружаемой конфигурации есть ключ extend, то нужно загрузить конфигурацию с именем, хранящимся в этом ключе. Например:
```
{
  "extend": "development",
  "host": "dev.server",
  "password": "admin"
}
```

В ключе extend хранится значение 'development', поэтому дополнительно загружается конфигурация database.development.json также далее с новой загруженной конфигурацией.

Конфигурации сливаются между собой так, что приоритет имеет загруженная раньше. Итоговая конфигурация не должна содержать ключ extend. Подробнее смотрите примеры в тестах.

Подсказки
* Для чтения файла используйте соответствующую синхронную функцию из модуля fs.

### app-1 (InMemoryKV & keyValueFunctions)
FileKV.js
В программировании, для некоторых задач распространены key-value базы данных. Внешне они работают по принципу ассоциативных массивов, но живут как отдельные программы и умеют делать много полезных штук: например, сохранять данные на диск, переносить данные между машинами в сети и тому подобное.

В этой задаче реализована подобная база данных в виде класса FileKV, который сохраняет свои данные на диске в указанном файле. Она имеет следующий интерфейс:
```
import FileKV from '../FileKV.js';
 
const map = new FileKV('/path/to/dbfile');
// Получение значения по ключу
map.get('key'); // 'value'
map.get('unknownkey'); // null
// Получение значения и дефолт
map.get('unknownkey', 'default value'); // 'default value'
// Установка и обновление ключа
map.set('key2', 'value2');
map.get('key2'); // 'value2'
// Удаление ключа
map.unset('key2');
map.get('key2'); // null
map.set('key', 'value');
// Возврат всех данных из базы(возвращается новый объект)
map.toObject(); // { key: 'value' }
```
В целях тестирования бывает полезно иметь реализацию такой базы данных, которая хранит данные в памяти, а не во внешнем хранилище. Это позволяет легко сбрасывать состояние между тестами и не замедлять их.

InMemoryKV.js
Реализуйте и экспортируйте по умолчанию класс InMemoryKV, который представляет собой in-memory key-value хранилище. Данные внутри него хранятся в обычном объекте. Интерфейс этого класса совпадает с FileKV за исключением конструктора. Конструктор InMemoryKV принимает на вход объект, который становится начальным значением базы данных.
```
import InMemoryKV from '../InMemoryKV.js';
 
const map = new InMemoryKV({ key: 10 });
map.get('key'); // 10
```

keyValueFunctions.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход объект базы данных и меняет в нём ключи и значения местами.

swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.
```
import InMemoryKV from '../InMemoryKV.js';
import swapKeyValue from '../keyValueFunctions.js';
 
const map = new InMemoryKV({ key: 10 });
map.set('key2', 'value2');
swapKeyValue(map);
map.get('key'); // null
map.get(10); // 'key'
map.get('value2'); // 'key2'
```

### app-2 (FakeSubscription & User)
На Хекслете доступ к курсам оформляется через подписку. Подписка - это отдельная сущность, которая хранит в себе информацию о самой подписке: когда она началась, сколько продолжается, оплачена ли и так далее. Типичная проверка на наличие подписки (а значит доступ к платному контенту) выглядит так:
```
// Эти примеры сильно упрощены, к тому же Хекслет написан на Rails
// но для демонстрации идеи такая реализация подойдет
user.getCurrentSubscription().hasPremiumAccess();
user.getCurrentSubscription().hasProfessionalAccess();
```

Но не у всех пользователей есть подписка, на Хекслете есть и большая бесплатная часть. Так как подписка может отсутствовать, в коде придется делать так:
```
if (user.getCurrentSubscription() && user.getCurrentSubscription().hasPremiumAccess()) {
   // есть премиум доступ, показываем что-то особенное
}
```

Чтобы избежать постоянных проверок на существование подписки, мы внедрили Null Object. Теперь подписка есть всегда и достаточно написать:
```
if (user.getCurrentSubscription().hasProfessionalAccess()) {
   // есть профессиональный доступ, показываем что-то особенное
}
```

FakeSubscription.js
Реализуйте и экспортируйте по умолчанию класс FakeSubscription. В конструктор FakeSubscription принимает пользователя. Если пользователь администратор user.isAdmin(), то все доступы разрешены, если нет – то запрещены. Класс должен повторять интерфейс класса Subscription, то есть иметь те же методы, но со своей логикой.

User.js
Допишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка если она передана снаружи и создавалась фейковая в ином случае.

```
import Subscription from '../Subscription.js';
import User from '../User.js';
 
const user1 = new User('vasya@email.com', new Subscription('premium'));
user1.getCurrentSubscription().hasPremiumAccess(); // true
user1.getCurrentSubscription().hasProfessionalAccess(); // false
 
const user2 = new User('vasya@email.com', new Subscription('professional'));
user2.getCurrentSubscription().hasPremiumAccess(); // false
user2.getCurrentSubscription().hasProfessionalAccess(); // true
 
// Внутри создается фейковая, потому что подписка не передается
const user3 = new User('vasya@email.com');
user3.getCurrentSubscription().hasPremiumAccess(); // false
user3.getCurrentSubscription().hasProfessionalAccess(); // false
 
const user4 = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
user4.getCurrentSubscription().hasPremiumAccess(); // true
user4.getCurrentSubscription().hasProfessionalAccess(); // true
```