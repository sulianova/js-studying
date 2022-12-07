import _ from 'lodash';

export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  reduce(fn, initialValue) {
    let acc = fn(initialValue, this.key);

    if (this.left !== null) {
      acc = this.left.reduce(fn, acc);
    }
    if (this.right !== null) {
      acc = this.right.reduce(fn, acc);
    }

    return acc;
  }

  toArray() {
    return this.reduce((acc, key) => [...acc, key], []);
  }

  getCount() {
    return this.reduce((acc) => acc + 1, 0);
  }

  getSum() {
    return this.reduce((acc, key) => acc + key, 0);
  }

  toString() {
    return `(${this.toArray().join(', ')})`;
  }

  every(fn) {
    return this.reduce((acc, key) => acc && fn(key), true);
  }

  some(fn) {
    return this.reduce((acc, key) => acc || fn(key), false);
  }

}


const tree = new Node(9,
  new Node(4,
    new Node(8),
    new Node(6,
      new Node(3),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      null,
      new Node(20))));

console.log(tree.getCount()); // 9
console.log(tree.getSum()); // 96
console.log(tree.toArray()); // [9, 4, 8, 6, 3, 7, 17, 22, 20]
console.log(tree.toString()); // '(9, 4, 8, 6, 3, 7, 17, 22, 20)'
console.log(tree.every((key) => key <= 22)); // true
console.log(tree.every((key) => key < 22)); // false
console.log(tree.some((key) => key < 4)); // true
console.log(tree.some((key) => key > 22)); // false