import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
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

export default (tree) => {
  const children = getChildren(tree);
  const result = children
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), calculateFilesSize(child)]);

  return result.sort(([, size1], [, size2]) => size2 - size1);
};
