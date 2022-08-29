// НАЙТИ ТЕКСТ ВНУТРИ DIV И ОБЕРНУТЬ В <P></P>

export default (document) => {
    const root = document.body;
    const divElements = root.querySelectorAll('div');
  
    divElements.forEach((div) => {
      const textNodes = Array.from(div.childNodes)
        // const textNodes = [...div.childNodes]
        .filter((node) => node instanceof Text)
        .filter((node) => node.textContent.trim().replace(/\n/g, '') !== '');
  
      textNodes.forEach((node) => {
        const p = document.createElement('p');
        p.append(node.textContent);
        node.replaceWith(p);
      });
    });
  };
  
  // example
  // prettify(document);
  // console.log(document.body.innerHTML);