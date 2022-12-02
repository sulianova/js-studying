import _ from 'lodash';

export default class Cart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getCount() {
    //return _.sumBy(this.getItems(), (goods) => goods.count);
    return this.getItems().reduce((acc, { count }) => acc + count, 0);
  }

  getCost() {
    //return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
    return this.getItems().reduce((acc, {item, count }) => acc + item.price * count, 0);
  }
}