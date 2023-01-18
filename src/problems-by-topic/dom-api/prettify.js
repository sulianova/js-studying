export default (document) => {
  const divs = document.querySelectorAll('div');
  divs.forEach((div) => {
    const textNodes = Array.from(div.childNodes)
      // or
      // const textNodes = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};