import {
  isFile, getChildren,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

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

export default getNodesCount;
