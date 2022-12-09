import fsp from 'fs/promises';

export const move = (filepath1, filepath2, cb) => {
  fsp.readFile(filepath1, 'utf-8', (_error1, data1) => {
    if (_error1) {
      cb(_error1);
      return;
    }
    fsp.writeFile(filepath2, data1, 'utf8', (_error2) => {
      if (_error2) {
        cb(_error2);
        return;
      }
      fsp.unlink(filepath1, cb);
    });
  });
};