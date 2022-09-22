import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';
import path from 'path';

export default (tree, substr) => {
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
