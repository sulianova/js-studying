//считает размер переданной директории не включая поддиректории

import path from "path";
import _ from "lodash";
import fs from "fs/promises";

export default (dirpath) => {
  const promise = fs.readdir(dirpath, "utf-8").then((files) => {
    const promises = files.map((name) => fs.stat(path.join(dirpath, name)));
    return Promise.all(promises);
  });

  return promise.then((stats) =>
    _.sumBy(
      stats.filter((stat) => stat.isFile()),
      "size"
    )
  );
};

//example
// getDirectorySize('/usr/local/bin').then(console.log);

//считает размер переданной директории не включая поддиректории на кол-бэках
import path from "path";
import fs from "fs";
import _ from "lodash";
import async from "async";

const getDirectorySize = (dirpath, cb) => {
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
        "size"
      );
      cb(null, sum);
    });
  });
};

//example
// getDirectorySize('/usr/local/bin', (err, size) => {
//   console.log(size);
// });
