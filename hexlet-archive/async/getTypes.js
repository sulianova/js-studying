//ПРОВЕРИТЬ ФАЙЛ ИЛИ ДИРЕКТОРИЯ, ВЫВЕСТИ ОТВЕТ В МАССИВ
import fs from "fs/promises";

const getTypeName = (stat) => (stat.isDirectory() ? "directory" : "file");

export default (filesPath) => {
  const processPath = (filepath, result) =>
    fs
      .stat(filepath)
      .then((data) => [...result, getTypeName(data)])
      .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    (promise, filepath) =>
      promise.then((result) => processPath(filepath, result)),
    Promise.resolve([])
  );
  return resultPromise;
};

//example
// getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
