## JS: React

### Card
Реализуйте компонент Card, возвращающий следующий jsx:

```
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card</p>
    <button type="button" className="btn btn-primary">Go somewhere</button>
  </div>
</div>
```

Подсказки
Описание Card https://getbootstrap.com/docs/5.1/components/card/

### getCard
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами title и text, и возвращает jsx с подставленными значениями. Пример:

```
import getCard from './Card.jsx';

getCard({ title: 'hi', text: 'how are you?' });
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>
```

Если title отсутствует, то соответствующий ему кусок dom не отрисовывается, то же самое справедливо и для text. Если отсутствуют оба свойства, то из функции необходимо вернуть null.

### Card2
Реализуйте и экспортируйте по умолчанию компонент Card, который принимает на вход свойства title и text. И возвращает jsx с подставленными значениями. Если свойства не переданы, вместо них подставляются строки "title" и "text".

Пример:
```
const title = "title 1";
const text = "text 1";
ReactDOM.render(<Card title={title} text={text} />);
 
// вывод
<div className="card">
  <div className="card-body">
    <h4 className="card-title">title 1</h4>
    <p className="card-text">text 1</p>
  </div>
</div>;
 
// без пропсов
ReactDOM.render(<Card />);
 
// вывод
<div className="card">
  <div className="card-body">
    <h4 className="card-title">title</h4>
    <p className="card-text">text</p>
  </div>
</div>;
```

### DefinitionsList
В этом задании необходимо создать компонент, выводящий список определений.

dl – тег, который используется при создании списков определений. Совместно с этим тегом используется тег dt (содержит название определения) и dd (описание определения):

```
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```
Реализуйте и экспортируйте по умолчанию компонент DefinitionsList, который принимает свойство data следующей структуры:

```
const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];
 
<DefinitionsList data={definitions} />;
```

Результатом должен быть следующий вывод:
```
<dl>
  <dt>one</dt>
  <dd>two</dd>
  <dt>another term</dt>
  <dd>another description</dd>
</dl>
```

Если data — это пустой массив, то ничего не должно рендериться