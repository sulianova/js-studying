import fsp from 'fs/promises';

export default(path) => {
  const callback = (_error, data) => console.log(data);
  fsp.readFile(path, 'utf-8', callback);
};
