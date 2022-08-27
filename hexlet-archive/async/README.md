### JS: Asynchronous programming
***

#### getDirectorySize()
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async

Пример:
```
getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
```