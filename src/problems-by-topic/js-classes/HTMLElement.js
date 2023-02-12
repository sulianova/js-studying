export class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    const line = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    return line;
  }
}

export class HTMLHrElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    return `<hr${attrLine}>`;
  }
}