import _ from "lodash";

const makeDictionary = (tree, dictionary, parent = null) => {
  const [node, branches] = tree;
  const children = [];
  dictionary[node] = [parent, children];

  if (branches) {
    for (const branch of branches) {
      const name = makeDictionary(branch, dictionary, (parent = node));
      children.push(name);
    }
  }

  return node;
};

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

const findRoute = (start, finish, joints) => {
  const iter = (current, route) => {
    const routeToCurrent = [...route, current];

    if (current === finish) {
      return routeToCurrent;
    }

    const neighbors = joints[current];
    const filtered = neighbors.filter(
      (neighbor) => !routeToCurrent.includes(neighbor)
    );

    return filtered.reduce(
      (acc, neighbor) => _.concat(acc, iter(neighbor, routeToCurrent)),
      []
    );
  };

  return iter(start, []);
};

export default (tree, start, finish) => {
  const joints = makeJoints(tree);
  return findRoute(start, finish, joints);
};
