import {
  mkfile, mkdir, getChildren, getMeta, getName, isFile,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

export default (tree) => {
  const children = getChildren(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  const newChildren = children
    .map((child) => {
      const name = getName(child);
      if (!isFile(child) || !name.endsWith('.jpg')) {
        return child;
      }
      const newMetaFile = _.cloneDeep(getMeta(child));
      newMeta.size /= 2;
      return mkfile(name, newMetaFile);
    });

  const tree2 = mkdir(getName(tree), newChildren, newMeta);
  return tree2;
};
