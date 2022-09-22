// СЧИТАЕМ КОЛИЧЕСТВО ОСОБЕННЫХ ФАЙЛОВ
import { getName, isFile, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree)) {
    return name.startsWith('.') ? 1 : 0;
  }

  const children = getChildren(tree);
  const hiddenFilesCount = children.map((child) => getHiddenFilesCount(child));
  return _.sum(hiddenFilesCount);
};

export default getHiddenFilesCount;
