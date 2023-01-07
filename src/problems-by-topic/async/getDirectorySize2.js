import path from 'path';
import _ from 'lodash';
import fsp from 'fs/promises';

export const getDirectorySize = (dirpath) => {
  const promise = fsp
  .readdir(dirpath)
  .then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    const promises = filepaths.map((filePath) => fsp.stat(filePath));
    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};