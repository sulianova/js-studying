import _ from "lodash";

const makeJoints = (tree, parent) => {
  const [node, children] = tree;

  if (!children) {
    return { [node]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent].filter(
    (neighbor) => neighbor && !_.isArray(neighbor)
  );
  const joints = children.reduce(
    (acc, child) => ({ ...acc, ...makeJoints(child, node) }),
    {}
  );

  return { [node]: neighbors, ...joints };
};

const makeTree = (parent, joints) => {
  const iter = (node, tree) => {
    const currentTree = [...tree, node];

    const neighbors = joints[node];
    const children = neighbors.filter(
      (neighbor) => !currentTree.includes(neighbor)
    );
    const initAcc = (children.length === 0) ? [node] : [node, []];

		return children.reduce(
			(acc, child) => {
        const [parent, children] = acc;
				return [parent, _.concat(children, [iter(child, currentTree)])];
			}, initAcc
		);
  };

  return iter(parent, []);
};

export default (tree, node) => {
	const joints = makeJoints(tree);
	return JSON.stringify(makeTree(node, joints));
};