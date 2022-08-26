//ФОРМАТИРОВАТЬ ДАННЫЕ В HTML - ДОБАВИТЬ ПЕРЕНОСЫ
function normalize() {
    const coll = document.body.innerHTML.trim().split('\n').map((element) => `<p>${element}</p>`);
    document.body.innerHTML = coll.join('\n');
}
  
normalize();

const text = document.body.innerHTML.trim();
const lines = text.split('\n');
const tags = lines.map((line) => `<p>${line}</p>`);
document.body.innerHTML = tags.join('\n');

const text = '    I do not fear computers.\nComputer Science is no more about computers than astronomy is about telescopes.\nThe computer was born to solve problems that did not exist before.';

function normalize (text) {
    const coll = text.trim().split('\n').map((element) => element.trim());
    const newText = '<p>' + coll.join('</p><p>') + '</p>';
    return newText;
};

console.log(normalize(text));

//ОБНОВИТЬ ДАННЫЕ
PATCH /comments/3 HTTP/1.1
HOST: hexlet.local
Content-Length: 23
Content-Type: application/json

{ "text": "I got it!" }

