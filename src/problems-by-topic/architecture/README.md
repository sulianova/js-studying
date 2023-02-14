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

### app4
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список компаний (пример списка в файле src/index.js) и использует этот список для формирования кнопок (по одной на каждую компанию). Нажатие на кнопку приводит к выводу описания компании (если есть описание другой компании, оно заменяется). Повторное нажатие удаляет вывод. Данные должны полностью удаляться, скрытие с помощью классов не подходит. По умолчанию не показывается никакое описание.

Пример начального вывода (может отличаться от вашего):
```
<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
</div>
```

После клика на второй кнопке добавляется описание:
```
<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
  <div>search engine</div>
</div>
```

После клика на третьей кнопке описание заменяется на новое:
```
<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
  <div>social network</div>
</div>
```

После повторного клика на третьей кнопке описание удаляется:
```
<div class="container m-3">
  <button class="btn btn-primary">
    Hexlet
  </button>
  <button class="btn btn-primary">
    Google
  </button>
  <button class="btn btn-primary">
    Facebook
  </button>
</div>
```

### app7
Реализуйте логику переключения табов для компонента list-group бутстрапа, используя архитектуру MVC.

Активный элемент списка получает класс active, а контент, соответствующий ему, получает классы active show
```
<div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Home Content</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Profile Content</div>
    </div>
  </div>
</div>
```

Код должен работать даже в том случае, если на странице есть несколько компонентов list-group.

### app8
В этой задаче вам предстоит реализовать форму регистрации. Форма состоит из 4 полей (имя, email, пароль и его подтверждение). Начальный HTML доступен в public/index.html.

Форма должна быть контролируемой. Во время набора данных выполняется валидация сразу всех полей (для простоты). Валидацию нужно построить на базе библиотеки yup. В коде уже описана вся нужная валидация. Осталось только вызвать проверку и записать тексты ошибок в объект состояния.

Кнопка отправки формы по умолчанию заблокирована. Она разблокируется когда валидна вся форма целиком и блокируется сразу, как только появляется невалидное значение.

HTML когда введены неправильные email и password (один из возможных вариантов):

```
<div data-container="sign-up">
  <form data-form="sign-up" method="post">
    <div class="form-group">
      <label for="sign-up-name">Name</label>
      <input id="sign-up-name" type="text" class="form-control" name="name">
    </div>
    <div class="form-group">
      <label for="sign-up-email">Email<sup>*</sup></label>
      <!-- Если поле невалидно, то добавляется класс is-invalid -->
      <input id="sign-up-email" required="" type="email" class="form-control is-invalid" name="email"><div class="invalid-feedback">Value is not a valid email</div>
    </div>
    <div class="form-group">
      <label for="sign-up-password">Password<sup>*</sup></label>
      <input id="sign-up-password" required="" type="password" class="form-control is-invalid" name="password"><div class="invalid-feedback">Must be at least 6 letters</div>
    </div>
    <div class="form-group">
      <label for="sign-up-password-confirmation">Password Confirmation<sup>*</sup></label>
      <input id="sign-up-password-confirmation" required="" type="password" class="form-control" name="passwordConfirmation">
    </div>
    <input type="submit" class="btn btn-primary" value="Submit" disabled>
  </form>
</div>
```

После того как все поля введены правильно, данные формы отправляются постом на урл /users. Во время отправки кнопка отправки блокируется (во избежание двойной отправки).

Когда форма отправлена, HTML меняется на следующий:
```
<div data-container="sign-up">User Created!</div>
```

Подсказки
* Документация axios. Он работает очень похоже на fetch.
* Для навигации по DOM-дереву полезно использовать nextElementSibling
* API on-change позволяет получить предыдущее значение
* Текст ошибок может отличаться от примера выше и подставляется самим yup
* Данные формы можно отправлять в любом виде

### app9
В этом упражнении вам предстоит запрограммировать мультиязычный счётчик нажатий, состоящий из переключателя языка, кнопки с числом кликов и кнопки сброса счётчика. Начальное состояние:

```
<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-primary">English</button>
    <button type="button" class="btn mb-3 btn-outline-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">0 clicks</button>
<button type="button" class="btn btn-warning">Reset</button>
```

После двух нажатий по кнопке с классом btn-info и нажатия на кнопку переключения на русский язык:
```
<div class="btn-group" role="group">
    <button type="button" class="btn mb-3 btn-outline-primary">English</button>
    <button type="button" class="btn mb-3 btn-primary">Русский</button>
</div>
<button type="button" class="btn btn-info mb-3 align-self-center">2 клика</button>
<button type="button" class="btn btn-warning">Сбросить</button>
```

Экспортируйте функцию по умолчанию, которая реализует всю необходимую логику: работу кнопок счётчика, переключение языка. Тексты должны подставляться через библиотеку i18next.

Реализуйте тексты для англоязычной версии приложения.
Реализуйте тексты для русскоязычной версии приложения.

Подсказки:
* Для реализации переводов множественной формы вы можете написать свою функцию для получения нужного ключа по числу или воспользоваться возможностями библиотеки i18next
* Каждый запуск приложения должен создавать свой собственный инстанс i18next.
* Для изменения языка используется функция changeLanguage

### app10
В этом упражнении вам предстоит добавить на страницу несколько экземпляров мультиязычных счетчиков из предыдущего упражнения. Основная логика уже написана, вам надо только добавить инициализацию i18next и состояния.

Шаблон содержит два контейнера, в каждый контейнер вам нужно подключить счетчик. Каждый счетчик должен иметь своё состояние, переключение языка в одном счетчике не должно влиять на другой.

app10Index.js
Создайте два счетчика, для этого достаточно дважды запустить функцию app(). Передайте в каждую функцию свой контейнер. Селекторы контейнеров: .container-1 и .container-2. Вторым, необязательным параметром передаётся начальное состояние для каждого счетчика, можете его оставить пустым или заполнить своими данными.

app9.js
Добавьте в функцию инициализацию состояния и экземпляра i18next.

Вторым параметром функция принимает начальное состояние. Если передан не пустой объект, то значения его существующих свойств должны заменить значения в состоянии. Те свойства, которые переданы не были, должны быть заполнены значениями по умолчанию:
```
{
  lng: 'en',
  clicksCount: 0,
}
```

Проверьте что переключение одного счётчика не влияет на другой.