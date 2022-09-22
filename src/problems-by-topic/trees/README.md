## JS: trees

### removeFirstLevel
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, элементами которого являются дети вложенных узлов (см. пример).

```
// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
removeFirstLevel(tree1); // [5, 3, 4]
 
const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2);
// [3, 5, [4, 3], 2]
```

### makeTree
Реализуйте и экспортируйте по умолчанию функцию, которая создает такую файловую систему(порядок элементов важен):

```
# Обратите внимание на метаданные
 
nodejs-package # директория (метаданные: { hidden: true })
├── Makefile # файл
├── README.md # файл
├── dist # пустая директория
├── __tests__ # директория
│   └── half.test.js # файл (метаданные: { type: 'text/javascript' })
├── babel.config.js # файл (метаданные: { type: 'text/javascript' })
└── node_modules # директория (метаданные: { owner: 'root', hidden: false })
    └── @babel # директория
        └── cli # директория
            └── LICENSE # файл
```

### compressImages
Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. Под сжиманием понимается уменьшение свойства size в метаданных в два раза. Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными, которые были внутри этой директории.

Картинками считаются все файлы заканчивающиеся на .jpg.

```
const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);
 
const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза
```

### downcaseFileNames
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию (объект-дерево), приводит имена всех файлов в этой и во всех вложенных директориях к нижнему регистру. Результат в виде обработанной директории возвращается наружу.

```
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
 
const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
 
downcaseFileNames(tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }
```

### getHiddenFilesCount
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в директории и всех поддиректориях. Скрытым файлом в Linux системах считается файл, название которого начинается с точки.

```
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
 
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
getHiddenFilesCount(tree); // 3
```

### du 
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию и возвращает список вложенных узлов (директорий и файлов) в указанную директорию на один уровень, а так же место, которое они занимают. Размер файла задается в метаданных. Размер директории складывается из сумм всех размеров файлов, находящихся внутри во всех поддиректориях. Сами директории размера не имеют.

```
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import du from '../du.js';
 
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
du(tree);
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
```

### findFilesByName
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку. Функция должна вернуть полные пути до файлов.

```
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import findFilesByName from '../findFilesByName.js';
 
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
findFilesByName(tree, 'co');
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
```

### changeClass
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход html-дерево и заменяет во всех узлах имя класса, имена классов передаются через параметры. Функция не должна мутировать исходное дерево.

```
import changeClass from '../changeClass.js';
 
const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'hexlet-community',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};
 
const result = changeClass(tree, 'old-class', 'new-class');
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
```

### flatten
Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.

```
const list = [1, 2, [3, 5], [[4, 3], 2]];
 
flatten(list); // [1, 2, 3, 5, 4, 3, 2]
```