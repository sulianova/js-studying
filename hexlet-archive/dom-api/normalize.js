//ФОРМАТИРОВАТЬ ДАННЫЕ В HTML - ДОБАВИТЬ ПЕРЕНОСЫ СТРОК
export default ()=>  {
    const tags = document.body.innerHTML.trim().split('\n').map((element) => `<p>${element}</p>`);
    document.body.innerHTML = tags.join('\n');
};

// example
// const text = '    I do not fear computers.\nComputer Science is no more about computers than astronomy is about telescopes.\nThe computer was born to solve problems that did not exist before.';
// normalize(text);