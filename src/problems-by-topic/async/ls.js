import _ from 'lodash';
import path from 'path';
import fsp from 'fs/promises';

// const dirPath = '/Users/sofiyaulianova/Desktop/web-developer/js-studying/src/problems-by-topic/async';
const dirPath = '/Users/sofiyaulianova/Desktop/web-developer/js-studying/src/problems-by-topic/async/compareFileSizes.js';
// export default (dirPath) => fsp.readdir(dirPath).then((filenames) => {
// const f = (dirPath) => {
//   if (fsp.stat.isFile(dirPath)) return [{ filepath: dirPath, mode }];

//   fsp.stat.isFile(dirPath).then(isfile => 
//     if (isFile)
//   )

const collectStatFromFile = (filePath) => fsp.stat

const collectStatFromDir = (dirPath) => fsp.readdir(dirPath).then((filenames) => {
  const filepaths = filenames.map((name) => path.join(dirPath, name));

  const processPath = (filepath, result) => fsp
    .stat(filepath)
    .then((data) => [...result, { filepath, mode: data.mode }].sort(customSort))
    .catch(() => [...result, null]);
  
  const resultPromise = filepaths.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([])
  );

  return resultPromise;
});

f(dirPath).then(res => console.log(res));
