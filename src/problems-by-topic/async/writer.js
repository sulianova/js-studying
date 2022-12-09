import fsp from 'fs/promises';

export default (path, data, cb) => {
  fsp.writeFile(path, data, 'utf8', cb);
};