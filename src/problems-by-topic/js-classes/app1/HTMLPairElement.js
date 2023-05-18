import HTMLElement from './HTMLElement.js';

class HTMLPairElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    const name = this.getTagName();
    const body = this.getTextContent();
    return `<${name}${attrLine}>${body}</${name}>`;
  }

  getTextContent() {
    return this.body ?? '';
  }

  setTextContent(body) {
    this.body = body;
  }
}

export default HTMLPairElement;