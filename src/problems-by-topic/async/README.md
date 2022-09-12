## JS: Asynchronous programming
### getDirectorySize
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async.

Пример:
```
getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
```

### exchange
Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает содержимое двух файлов.

Пример:
```
exchange('/myfile1', '/myfile2');
```

### wait
Реализуйте таймер в виде промиса. Функция должна принимать на вход количество миллисекунд и возвращать промис.

Пример:
```
wait(100).then(() => console.log('time is over!'));
```

### getTypes
Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей и возвращает массив (в промисе), с описанием того, что находится по каждому из путей в виде строк 'directory' и 'file'.

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки.

Пример:
```
getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
```

### getBadLinks
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход ссылку на страницу какого-то сайта, загружает содержимое этой страницы, извлекает из него ссылки и проверяет их доступность. Функция должна вернуть список битых ссылок. Любые ссылки возвращающие коды ответа кроме 2xx (любые двухсотые) считаются битыми.

Пример:
```
const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);
// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]
```

### watch
Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла с заданной периодичностью. Функция должна возвращать идентификатор таймера, запущенного внутри.

Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек. Если во время анализа файла (через `fs.stat`) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.

Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:
* Путь до файла, который нужно отслеживать
* Период отслеживания
* Колбек, принимающий аргументом ошибку

Пример:
```
const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});
 
setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд

```