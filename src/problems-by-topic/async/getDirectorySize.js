import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
    });
  });
};

