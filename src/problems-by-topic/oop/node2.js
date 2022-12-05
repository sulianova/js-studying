export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getKey() {
    return this.key;
  }

  insert(key) {
    if (this.key === null) {
      this.key = key;
    }
    if (key < this.key) {
      if (this.left === null) {
        this.left = new Node();
      }
      this.left.insert(key);
    }
    if (key > this.key) {
      if (this.right === null) {
        this.right = new Node();
      }
      this.right.insert(key);
    }
  }
}
