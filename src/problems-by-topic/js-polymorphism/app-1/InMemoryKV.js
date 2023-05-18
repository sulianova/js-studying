import _ from 'lodash';

export default class InMemoryKV {
  constructor(init = {}) {
    this.map = _.cloneDeep(init);
  }

  set(key, value) {
    this.map[key] = value;
  }

  unset(key) {
    this.map = _.omit(this.map, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.map, key, defaultValue);
  }

  toObject() {
    return _.cloneDeep(this.map);
  }
}