// считает размер переданной директории не включая поддиректории

import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';
import fs from 'fs';
import async from 'async';

export default (dirpath) => {
  const promise = fsp.readdir(dirpath, 'utf-8').then((files) => {
    const promises = files.map((name) => fsp.stat(path.join(dirpath, name)));
    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(
    stats.filter((stat) => stat.isFile()),
    'size',
  ));
};

// example
// getDirectorySize('/usr/local/bin').then(console.log);

// считает размер переданной директории не включая поддиректории на кол-бэках
export const getDirectorySizeCallBack = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, files) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = files.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(
        stats.filter((stat) => stat.isFile()),
        'size',
      );
      cb(null, sum);
    });
  });
};

// example
// getDirectorySize('/usr/local/bin', (err, size) => {
//   console.log(size);
// });
