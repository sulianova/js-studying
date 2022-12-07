class Truncater {
  static defaultOptions = {
    length: 200,
    separator: '...',
  };

  constructor(options = {} ) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  truncate(str, options = {}) {
    const { length, separator } = { ...this.options, ...options };
    return (str.length <= length) ? str : str.slice(0, length) + separator;
  }

}