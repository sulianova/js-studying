//ЗАМЕНИТЬ В HTML КЛАССЫ
import _ from 'lodash';

const changeClass = (tree, classNameFrom, classNameTo) => {
  const iter = (node) => {
    const updatedNode = { ...node };

    if (_.has(node, 'className')) {
      const newClassName = classNameFrom === node.className ? classNameTo : node.className;
      updatedNode.className = newClassName;
    }

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map(iter);
      updatedNode.children = newChildren;
    }

    return updatedNode;
  };

  return iter(tree);
};

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


console.log(JSON.stringify(result,null,'\t'));
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


//НАЙТИ ФАЙЛ ПО ИМЕНИ
import { mkdir, mkfile, isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';
import path from 'path';

const findFilesByName = (tree, substr) => {
  const iter = (node, ancestry) => {

    const name = getName(node);
    const newAncestry = path.join(ancestry, name);

    if (isFile(node)) {
      return name.includes(substr) ? newAncestry : [];
    }

    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };

  return iter(tree, '');
};


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
 

console.log(findFilesByName(tree, 'co'));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']


//ПОСЧИТАТЬ РАЗМЕР ФАЙЛОВ В ДИРЕКТОРИЯХ
import { mkdir, mkfile, isDirectory, isFile, getName, getMeta, getChildren, } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const calculateFilesSize = (node) => {
  
  if (isFile(node)) {
    const newMeta = _.cloneDeep(getMeta(node));
    return newMeta.size;
  }
 
  const children = getChildren(node);
  const filesSize = children.map(calculateFilesSize);
  return _.sum(filesSize);
  
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), calculateFilesSize(child)]);

  return result.sort(([, size1], [, size2]) => size2 - size1);
};
 
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
 
console.log(du(tree));
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]

//СЧИТАЕМ КОЛИЧЕСТВО ОСОБЕННЫХ ФАЙЛОВ
import { mkdir, mkfile, getName, isFile, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

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

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree) ) {
    return name.startsWith('.') ? 1 : 0;
  }

  // Если узел — директория, получаем его детей
  const children = getChildren(tree);
  // Самая сложная часть
  // Считаем количество потомков для каждого из детей,
  // вызывая рекурсивно нашу функцию getHiddenFilesCount
  const hiddenFilesCount = children.map((child) => getHiddenFilesCount(child));
  // Возвращаем общее количество потомков, проходящих условие
  return _.sum(hiddenFilesCount);
};
 
console.log(getHiddenFilesCount(tree)); // 3


//СЧИТАЕМ ВСЕХ ФАЙЛОВ И ДИРЕКТОРИЙ
import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';
  import _ from 'lodash';
  
  const tree = mkdir('/', [
    mkdir('etc', [
      mkfile('bashrc'),
      mkfile('consul.cfg'),
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
      mkfile('ls'),
      mkfile('cat'),
    ]),
  ]);
  
// В реализации используем рекурсивный процесс,
// чтобы добраться до самого дна дерева.
const getNodesCount = (tree) => {
    if (isFile(tree)) {
      // Возвращаем 1 для учёта текущего файла
      return 1;
    }
  
    // Если узел — директория, получаем его детей
    const children = getChildren(tree);
    // Самая сложная часть
    // Считаем количество потомков для каждого из детей,
    // вызывая рекурсивно нашу функцию getNodesCount
    const descendantCounts = children.map(getNodesCount);
    // Возвращаем 1 (текущая директория) + общее количество потомков
    return 1 + _.sum(descendantCounts);
};
  
getNodesCount(tree); // 8


//ПРИВОДИМ НАЗВАНИЯ ФАЙЛОВ К НИЖНЕМУ РЕГИСТРУ
import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';
  import _ from 'lodash';
  
  const downcaseFileNames = (tree) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
  
    if (isFile(tree)) {
      // Возвращаем обновлённый файл
      return mkfile(name.toLowerCase(), newMeta);
    }
  
    
    // Ключевая строчка
    // Вызываем рекурсивное обновление каждого ребёнка
    const children = getChildren(tree);
    const newChildren = children.map((child) => downcaseFileNames(child));
    const newTree = mkdir(name, newChildren, newMeta);
  
    // Возвращаем обновлённую директорию
    return newTree;
};
  
  
const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.json'),
      ]),
    ]),
    mkfile('hOsts'),
]);
   
const newTree = downcaseFileNames(tree);
console.log(JSON.stringify(newTree,null,'\t'));
  
//СЖАТЬ ФАЙЛЫ
import {
  mkfile, mkdir, getChildren, getMeta, getName, isFile, isDirectory,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';


const compressImages = (tree) => {
  const children = getChildren(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  const newChildren = children
      .map((child) => {
          const name = getName(child);
          if (!isFile(child) || !name.endsWith('.jpg')) {
              return child;
            }
          const newMeta = _.cloneDeep(getMeta(child));
          newMeta.size /= 2;
          return mkfile(name, newMeta);
      });
  
  const tree2 = mkdir(getName(tree), newChildren, newMeta);
  return tree2;
};

const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);
 
const newTree = compressImages(tree);
console.log(JSON.stringify(newTree,null,'\t'));
//   console.log(newTree);
  
//СДЕЛАТЬ ДЕРЕВО

import { mkfile, mkdir, isDirectory, isFile } from '@hexlet/immutable-fs-trees';

const maketree = () => {
    const tree = mkdir('nodejs-package', [
      mkfile('Makefile'),
      mkfile('README.md'),
      mkdir('dist'),
      mkdir('__tests__', [
        mkfile('half.test.js', { type: 'text/javascript' }),
      ]),
      mkfile('babel.config.js', { type: 'text/javascript' }),
      mkdir('node_modules', [
        mkdir('@babel', [
          mkdir('cli', [
            mkfile('LICENSE'),
          ]),
        ]),
      ], { owner: 'root', hidden: false }),
    ], { hidden: true });
    return tree;
  };

console.log(maketree());
console.log(isDirectory(tree));