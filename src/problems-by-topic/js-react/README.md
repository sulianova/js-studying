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

### Progress
Реализуйте и экспортируйте по умолчанию компонент Progress, который принимает свойство percentage и рисует статический прогресс бар.

Использование:
```
<Progress percentage={40} />;
```

Результат:
```
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
  </div>
</div>
```

* Стиль width – вычисляется динамически исходя из переданного значения percentage
* Аттрибут aria-valuenow – вычисляется динамически и равен percentage

### Alert
Реализуйте компонент Alert, который отрисовывает алерт бутстрапа. Компонент принимает на вход два свойства:

* text - отображаемый текст
* type - тип алерта, может принимать одно из следующих значений: primary, secondary, success, danger, warning, info, light, dark;
Пример использования:
```
<Alert type="warning" text="what is love?" />;
```

Вывод:
```
<div class="alert alert-warning" role="alert">what is love?</div>
```

### ListGroup
Реализуйте компонент ListGroup, который отрисовывает переданных детей, оборачивая их в список.

Пример использования:
```
<ListGroup>
  <p>one</p>
  <p>two</p>
</ListGroup>;
```

Результат:
```
<ul class="list-group">
  <li class="list-group-item"><p>one</p></li>
  <li class="list-group-item"><p>two</p></li>
</ul>
```

### BtnGroup
Реализуйте компонент BtnGroup, который отрисовывает две кнопки. Нажатие на любую из кнопок делает ее активной, а другую неактивной. При первой загрузке ни одна из кнопок не нажата.

Пример использования:
```
<BtnGroup />
```

Результат:
```
<div class="btn-group" role="group">
  <button type="button" class="btn btn-secondary left">Left</button>
  <button type="button" class="btn btn-secondary right">Right</button>
</div>
```

После нажатия на левую кнопку, добавляется класс active. В результате список классов выглядит так: btn btn-secondary left active. У правой кнопки поведение соответствующее.

### Carousel
Реализуйте компонент, эмулирующий работу слайдера. Компонент принимает на вход свойство images, в котором находится список путей до картинок. Компонент отображает их и позволяет с помощью стрелок "вперёд" и "назад" осуществлять переход по ним. Сам переход зациклен. Картинки (пути до них) могут повторятся.

Ниже описано поведение:
* Если выбрана последняя картинка, то next ведёт на первую. То же самое происходит и prev, но в обратную сторону.
* Первая картинка становится активной. Порядок картинок и их отображение должны сохраняться.
Начальная вёрстка с данными, которые прогружаются в файле src/index.jsx:
```
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img alt="" class="d-block w-100" src="/images/first.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/second.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/third.jpeg">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```
Хотя вёрстка и не тривиальная, единственное, что меняется в ней — класс active.

Подсказки
* Carousel
* Для генерации уникальных значений, можно импортировать uniqueId() из библиотеки lodash

### Collapse
Реализуйте компонент <Collapse>, который по клику на ссылке отображает или скрывает свое содержимое. Если содержимое скрыто, то клик раскрывает его. И наоборот - если содержимое отображается, то клик скрывает контент. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

```
const text = 'collapse me';
<Collapse text={text} opened={false} />;
```

```
<div>
  <p>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false">Link with href</a>
  </p>
  <div class="collapse">
    <div class="card card-body">
      collapse me
    </div>
  </div>
</div>
```
После клика к классу collapse элемента <div> добавляется класс show, a значение атрибута aria-expanded меняется на true.

### MyForm
Реализуйте компонент <MyForm>, отображающий форму из шести элементов:

email – инпут типа email
password – инпут типа password
address – textarea
city – текстовый инпут
country – select со следующими значениями: argentina, russia, china.
Accept Rules – checkbox булево значение должно быть приведено к строке
После сабмита формы появляется таблица, в которой показываются значения всех полей. Из этой формы можно вернуться в редактирование по кнопке Back. При этом все данные должны оказаться на своих местах.

Форма
```
<form name="myForm">
  <div class="col-md-6 mb-3">
      <label for="email" class="col-form-label">Email</label>
      <input type="email" name="email" class="form-control" id="email" placeholder="Email">
    </div>
    <div class="col-md-6 mb-3">
      <label for="password" class="col-form-label">Password</label>
      <input type="password" name="password" class="form-control" id="password" placeholder="Password">
    </div>
  <div class="col-md-6 mb-3">
    <label for="address" class="col-form-label">Address</label>
    <textarea type="text" class="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
  </div>
  <div class="col-md-6 mb-3">
      <label for="city" class="col-form-label">City</label>
      <input type="text" class="form-control" name="city" id="city">
    </div>
    <div class="col-md-6 mb-3">
      <label for="country" class="col-form-label">Country</label>
      <select id="country" name="country" class="form-control">
        <option value="">Choose</option>
        <option value="argentina">Argentina</option>
        <option value="russia">Russia</option>
        <option value="china">China</option>
      </select>
    </div>
  <div class="col-md-6 mb-3">
    <div class="form-check">
      <label class="form-check-label" for="rules">
        <input id="rules" type="checkbox" name="acceptRules" class="form-check-input">
        Accept Rules
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
```

Пример таблицы после отправки формы:
```
<div>
  <button type="button" class="btn btn-primary">Back</button>
  <table class="table">
    <tbody>
      <tr>
        <td>acceptRules</td>
        <td>true</td>
      </tr>
      <tr>
        <td>address</td>
        <td>lenina street</td>
      </tr>
      <tr>
        <td>city</td>
        <td>moscow</td>
      </tr>
      <tr>
        <td>country</td>
        <td>russia</td>
      </tr>
      <tr>
        <td>email</td>
        <td>my@email.com</td>
      </tr>
      <tr>
        <td>password</td>
        <td>qwerty</td>
      </tr>
    </tbody>
  </table>
</div>
```

Строки сортируются в алфавитном порядке по именам в первом столбце. В вашем случае результирующая таблица может отличаться, все зависит от того, какие данные выбраны, но названия полей должны быть как указано в примере.

### Component
Реализуйте компонент, который представляет собой две кнопки и лог событий:

Лог — это список значений, каждое из которых получается после нажатия на одну из двух кнопок. Снизу находятся более старые события, сверху новые.
Левая кнопка + добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" + 1
Правая кнопка - добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" - 1
При клике на запись в логе она удаляется.

Начальный HTML:
```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
</div>
```

После нажатия последовательности +, +, -, +:
```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>
```

Каждое нажатие кнопки добавляет в лог новую строчку сверху. При удалении всех строчек в логе компонент возвращается к изначальному HTML.

### TodoBox
Реализуйте простой Todo, с возможностью добавлять и удалять заметки. Основной компонент, который выводит форму для добавления новой записи и выводит список заметок на экран.

Начальный HTML:
```
<div>
  <div class="mb-3">
    <form class="d-flex">
      <div class="me-3">
        <input type="text" value="" required="" class="form-control" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
</div>
```

Item.jsx
Отрисовывает конкретный элемент списка. Принимает на вход свойства:

* task
* onRemove
HTML с добавленными заметками:
```
<div>
  <div class="mb-3">
    <form class="d-flex">
      <div class="me-3">
        <input type="text" value="" required="" class="form-control" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
  <div>
    <div class="row">
      <div class="col-auto">
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col">second</div>
    </div>
    <hr>
  </div>
  <div>
    <div class="row">
      <div class="col-auto">
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col">first</div>
    </div>
    <hr>
  </div>
</div>
```

Подсказки
* Для получения нового id используйте функцию uniqueId

### Card3
Реализуйте компонент <Card> так, чтобы можно составлять такую структуру:
```
<Card>
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Text>Text</Card.Text>
  </Card.Body>
</Card>
```

Получившийся HTML:
```
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Text</p>
  </div>
</div>
```

### Contexts
src/App.jsx
Ознакомьтесь со списком тем. Каждая тема включает в себя класс стилей, который должен присваиваться контенту при переключении темы. Сделайте сохранение выбранной темы в состоянии компонента, по умолчанию выбрана первая тема. Добавьте провайдер для передачи данных контекста. Данные должны содержать всё необходимое для работы: список тем, текущую выбранную тему, метод для изменения темы.

Реализуйте переключатель вкладок. Можно использовать готовый компонент Tabs из react-bootstrap.

Пример использования:
```
render() {
  return (
    <Tabs>
      <Tab eventKey="login" title="Login">
        <Home />
      </Tab>
      <Tab eventKey="registration" title="Registration">
        <Profile />
      </Tab>
    </Tabs>
  );
}
```

src/Home.jsx и src/Profile.jsx
В компонентах src/Home.jsx и src/Profile.jsx добавьте получение необходимых данных из контекста. Выведите текст из константы content. Элемент контента должен содержать класс выбранной темы.

Пример контента внутри вкладки:
```
<article class="light">Текст для вкладки Home</article>
```

src/ThemeSwitcher.jsx
Добавьте получение необходимых данных из контекста и реализуйте переключение темы. Переключение тем должно срабатывать для всех вкладок. Можно использовать готовый компонент ToggleButton из react-bootstrap.

Пример использования:
```
render() {
  return (
    <ButtonGroup className="mb-2">
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
    </ButtonGroup>
  );
}
```

### Modal
Реализуйте компонент <Modal> (Модальное окно)
Использование:
```
export default class Component extends React.Component {
  state = { modal: false };
 
  toggle = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  }
 
  render() {
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
```

HTML закрытого состояния:
```
<div>
  <button type="button" class="modal-open-button btn btn-danger">Open</button>
  <div class="modal" style="display: none;" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Modal title</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
        <div class="modal-footer">
          <button type="button" class="modal-close-button btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

В открытом состоянии строчка: <div class="modal" style="display: none;"> заменяется на <div class="modal fade show" style="display: block;">

У открытого модального окна две кнопки закрывающие его: крестик справа вверху и кнопка Cancel справа внизу.

### Autocomplete
Реализуйте компонент <Autocomplete />, который представляет собой текстовое поле с автодополнением списка стран. Автодополнение срабатывает только в том случае, если указан хотя бы один символ. Для пустого запроса ничего не выводится.

Список стран можно получить, сделав запрос:
```
const res = await axios.get('/countries', { params: { term: 'al' } });
console.log(res.data); // => ["Albania","Algeria"]
```

Где term – это начало слова (любое количество символов введенное пользователем)

Начальный HTML:
```
<div>
  <form>
    <input type="text" class="form-control" placeholder="Enter Country">
  </form>
</div>
```

HTML после выбора "al":
```
<div>
  <form>
    <input type="text" class="form-control" placeholder="Enter Country">
  </form>
  <ul>
    <li>Albania</li>
    <li>Algeria</li>
  </ul>
</div>
```

Подсказки
* В качестве key для элементов списка используйте название страны.
* Запросы могут выполняться разное время. Например если ввести a а затем быстро стереть символ, то последний запрос(с пустой строкой) может выполниться раньше, чем первый запрос с буквой a. В этом задании вам не нужно об этом беспокоится. В реальных проектах такое поведение решается с помощью задержки запроса перед каждым вводом.

### TodoBox2
В этом упражнении необходимо реализовать записную книжку, которая взаимодействует с бекендом по следующим урлам:

GET /api/tasks - получить список задач.
Формат ответа - [{"id":"1","text":"first task","state":"finished"},{"id":"2","text":"second task","state":"active"}]
POST /api/tasks - создать новую задачу.
Формат запроса - {"text": "another task"}
Формат ответа - {"id":"4","text":"new task","state":"active"}
PATCH /api/tasks/:id/finish - завершить задачу.
Формат ответа - {"id":"1","text":"first task","state":"finished"}
PATCH /api/tasks/:id/activate - переоткрыть завершенную задачу - {"id":"1","text":"first task","state":"active"}

Начальный HTML, при первой загрузке на сервере задач нет(GET /api/tasks возвращает пустой массив):
```
<div>
  <div class="mb-3">
    <form class="todo-form mx-3">
      <div class="d-flex col-md-3">
        <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
        <button type="submit" class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
</div>
```

HTML после того как добавлены последовательно три задачи "first task", "second task" и "another task".
```
<div>
  <div class="mb-3">
    <form class="todo-form mx-3">
      <div class="d-flex col-md-3">
        <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
        <button type="submit" class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
  <div class="todo-active-tasks">
    <div class="row">
      <div class="col-1">3</div>
      <div class="col">
        <a href="#" class="todo-task">another task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">2</div>
      <div class="col">
        <a href="#" class="todo-task">second task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">1</div>
      <div class="col">
        <a href="#" class="todo-task">first task</a>
      </div>
    </div>
  </div>
</div>
```

На последнюю добавленную был совершен клик, который перевел задачу в выполненные:
```
<div>
  <div class="mb-3">
    <form class="todo-form mx-3">
      <div class="d-flex col-md-3">
        <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
        <button type="submit" class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
  <div class="todo-active-tasks">
    <div class="row">
      <div class="col-1">2</div>
      <div class="col">
        <a href="#" class="todo-task">second task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-1">1</div>
      <div class="col">
        <a href="#" class="todo-task">first task</a>
      </div>
    </div>
  </div>
  <div class="todo-finished-tasks">
    <div class="row">
      <div class="col-1">3</div>
      <div class="col">
        <s><a href="#" class="todo-task">another task</a></s>
      </div>
    </div>
  </div>
</div>
```

После клика по задаче "second task":
```
<div>
  <div class="mb-3">
    <form class="todo-form mx-3">
      <div class="d-flex col-md-3">
        <input type="text" value="" required="" class="form-control me-3" placeholder="I am going...">
        <button type="submit" class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
  <div class="todo-active-tasks">
    <div class="row">
      <div class="col-1">1</div>
      <div class="col">
        <a href="#" class="todo-task">first task</a>
      </div>
    </div>
  </div>
  <div class="todo-finished-tasks">
    <div class="row">
      <div class="col-1">3</div>
      <div class="col">
        <s><a href="#" class="todo-task">another task</a></s>
      </div>
    </div>
    <div class="row">
      <div class="col-1">2</div>
      <div class="col">
        <s><a href="#" class="todo-task">second task</a></s>
      </div>
    </div>
  </div>
</div>
```

TodoBox.jsx
Реализуйте компонент <TodoBox>.

Первоначальная подгрузка задач с сервера должна происходить сразу после монтирования компонента в DOM.

Список выполненных задач должен идти после списка активных задач, при этом задачи в каждом списке должны идти в том порядке, в котором они добавлялись (сверху последняя)

Item.jsx
Реализуйте компонент <Item> отвечающий за вывод конкретной записи.

Выполненная задача должна быть обёрнута в тэг <s> чтобы элемент отображался как перечеркнутый

Подсказки
* Для генерации урлов в файле routes.js созданы специальные хелперы
* Для изменения состояния используйте immutability-helper
* Изменение объекта в массиве: update([{ hello: 'world' }], { 0: { $merge: { hello: 'kitty' } } })
* После выполнения запроса на добавление элемента, нет необходимости заново получать весь список повторным гет-запросом. Тесты проверяют, что нет лишних запросов

### MarkdownEditor
Реализуйте компонент <MarkdownEditor />, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет встроить в страницу Markdown-редактор.
```
const editor = new Editor({
  el: element,
  hideModeSwitch: true,
});
 
editor.addHook('change', () => {
  const content = editor.getMarkdown();
  // код который будет вызван при изменении содержимого редактора
});
```

Компонент принимает на вход функцию как свойство onContentChange, которая вызывается при каждом изменении в редакторе. Функция принимает на вход содержимое редактора. Его использование видно в файле src/index.jsx.

Посмотреть пример работы редактора можно на странице документации.