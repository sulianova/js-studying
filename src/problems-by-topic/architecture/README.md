
## JS: Frontend architecture

### app
Реализуйте и экспортируйте по умолчанию функцию, реализующую приложение "суммирующий калькулятор". Калькулятор представляет из себя одно поле для ввода чисел и две кнопки: сложение и сброс. Под калькулятором выводится текущая сумма, которая изначально равна нулю. Каждое нажатие кнопки plus добавляет к этой сумме введенное значение. Нажатие кнопки сброс возвращает состояние к первоначальному (сумма устанавливается в 0).

Сделайте калькулятор дружественным пользователю: устанавливайте фокус на поле для ввода при каждой отрисовке формы (включая первую) и очищайте форму после отправки/очистки.

Подсказки
* Данные из формы приходят в виде текста. Для преобразования строки в число используйте parseInt()
* form.reset()
* input.focus()

### app2
Реализуйте и экспортируйте функцию по умолчанию, которая создает на странице TODO-приложение. Это приложение состоит из формы добавления (уже есть на странице) и списка задач добавленных через форму. Каждая новая задача выводится первой в списке добавленных ранее задач.

Начальный HTML:
```
<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <button type="submit" class="btn btn-primary mr-3">add</button>
  </form>
  <ul id="tasks" class="list-group" aria-label="Tasks"></ul>
</div>
```

После добавления двух задач:
```
<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <button type="submit" class="btn btn-primary mr-3">add</button>
  </form>
  <ul id="tasks" class="list-group" aria-label="Tasks">
    <li class="list-group-item">Вторая задача</li>
    <li class="list-group-item">Первая задача</li>
  </ul>
</div>
```

У нашего TODO-приложения есть бэкенд. Этот бэкенд умеет получать новые задачи и возвращать список ранее добавленных задач.
```
import axios from 'axios';
 
// Список добавленных задач GET
const response = await axios.get(routes.tasksPath());
// response.data содержит объект: { items: [{ name: 'имя задачи' }, { ... }]  }
 
// Добавление новой задачи POST
const response = await axios.post(routes.tasksPath(), data); // Где data это { name: 'имя задачи' }
// response.status содержит 201 в случае успеха
```
Во время инициализации (внутри функции), приложение должно делать запрос на сервер, извлекать оттуда уже добавленные задачи и выводить их на экран. Во время добавления новой задачи, приложение должно выполнять запрос на добавление задачи на сервер.

### app3
Реализуйте и экспортируйте функцию по умолчанию, которая активизирует фильтр на основе формы доступной в public/index.html. Изменение любого параметра должно сразу приводить к фильтрации. Ноутбуки, подходящие под фильтр, выводятся внутри `<div class="result"></div>` как список ul/li моделей (свойство model внутри объекта представляющего ноутбук). Полный список ноутбуков доступен в файле src/index.js.

Условия:
* Если фильтр пустой, то выводится все.
* Если под фильтр ничего не подходит, то список не выводится.

Подсказки
* Для отслеживания изменений текстовых инпутов используйте событие input. Для select - change.
* Для фильтрации товаров по выбранным фильтрам используйте метод массива every()
* На старте фильтры не указаны, поэтому должен отрисовываться весь список

html:
```
<body>
  <div class="container m-3">
    <div class="row">
      <div class="col-6">
        <form>
          <div>
            <label>
              Processor
              <select name="processor_eq">
                <option value="">Select</option>
                <option value="intel">Intel</option>
                <option value="amd">AMD</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Memory
              <select name="memory_eq">
                <option value="">Select</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Frequency Min
              <input type="number" name="frequency_gte" min="1" max="5" value="">
            </label>
          </div>
          <div>
            <label>
              Frequency Max
              <input type="number" name="frequency_lte" min="1" max="5" value="">
            </label>
          </div>
        </form>
      </div>
      <div class="col-6">
        <div class="result"></div>
      </div>
    </div>
  </div>
  <script type="module" src="./src/index.js"></script>
</body>
```

script:
```
import app from './application.js';

const laptops = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

app(laptops);
```