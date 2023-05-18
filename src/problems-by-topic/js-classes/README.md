## JS: Classes

### HTMLElement
Реализуйте метод stringifyAttributes(), который формирует строчку для аттрибутов. Используйте этот метод в наследнике для формирования тега.

Реализуйте класс HTMLHrElement (наследуется от HTMLElement), который отвечает за представление тега <hr>. Внутри класса определите функцию toString(), которая возвращает текстовое представление тега.

```
import HTMLHrElement from './HTMLHrElement.js'
const hr = new HTMLHrElement();
console.log(hr.toString()); // => <hr>
 
const hr = new HTMLHrElement({ class: 'w-75', id: 'wop' });
console.log(hr.toString()); // => '<hr class="w-75" id="wop">';
```

### app1
Реализуйте класс HTMLPairElement (наследуется от HTMLElement), который отвечает за генерацию представления парных элементов и работу с телом. Класс должен содержать следующие методы:
```
toString();
getTextContent();
setTextContent(body); // принимает строку
```

Реализуйте класс HTMLDivElement, который описывает собой парный тег <div>.
```
const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
div.setTextContent('Body');
console.log(div.toString()); // '<div name="div" data-toggle="true">Body</div>'
```

### SmartFileInfo
В стандартной библиотеке Node.js есть класс fs.Stats. Объекты этого класса описывают собой файлы. С их помощью можно получать любую метаинформацию о файле.
```
import fs from 'fs';
 
const stats = fs.statSync('/etc/hosts');
console.log(stats.size); // размер в байтах
```

SmartFileInfo.js
Реализуйте класс SmartFileInfo, наследующийся от FileInfo. Этот класс должен расширять поведение метода getSize. В новом классе этот метод принимает на вход аргумент, который обозначает единицу измерения возвращаемых данных. По умолчанию это b, то есть байты. Но можно передать и kb, то есть килобайты. В случае килобайтов, переопределённый метод делит байты на 1024 и получившееся значение возвращает наружу.

Метод должен обрабатывать ситуацию, когда на вход поступает что-то другое, кроме указанных значений. Обработка сводится к возбуждению исключения Error.
```
const file = new SmartFileInfo(path.resolve('Makefile'));
file.getSize(); // 19
file.getSize('b'); // 19
file.getSize('kb'); // 0.0185546875
file.getSize('udav'); // Error
```