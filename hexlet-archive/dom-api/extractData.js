// ИЗВЛЕЧЬ ПАРАГРАФЫ СО СТРАНИЦЫ И ВЕРНУТЬ МАССИВ С ИХ СОДЕРЖИМЫМ

export default (documentElement) => {
    const children = Array.from(documentElement.parentNode.body.children);
    return children
      .filter((element) => element.tagName === 'P')
      .map((element) => element.innerHTML.trim());
};
  
// example
// const data = extractData(document.documentElement);
// console.log(data);

