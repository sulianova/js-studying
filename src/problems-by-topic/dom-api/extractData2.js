export default (document) => {
  const root = document.querySelector('.content');

  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;
  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;
  
  const itemElements = root.querySelectorAll('.links > div');
  const items = Array.from(itemElements).map((element) => {
      const titleElement = element.querySelector('a');
      const descriptionElement = element.querySelector('p');
    
      return {
        title: titleElement.innerHTML,
        description: descriptionElement.innerHTML,
      };
    });
    
    return {
      title: categoryTitle,
      description: categoryDescription,
      items,
    };

};