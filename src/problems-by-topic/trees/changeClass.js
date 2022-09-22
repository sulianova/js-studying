import _ from 'lodash';

export default (tree, classNameFrom, classNameTo) => {
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
