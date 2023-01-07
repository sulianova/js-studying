import _ from 'lodash';
import path from 'path';
import fsp from 'fs/promises';

export default async (pathForInspect) => {
  const absolutePath = path.resolve(pathForInspect);
  const stat = await fsp.stat(absolutePath);
  if (stat.isFile()) {
    return [{ filepath: absolutePath, mode: stat.mode }];
  }

  const filenames = await fsp.readdir(absolutePath);
  const filepaths = filenames.sort().map((filename) => path.join(absolutePath, filename));
  const stats = await Promise.all(filepaths.map((filePath) => fsp.stat(filePath)));

  return _.zipWith(filepaths, stats, (filepath, { mode }) => ({ filepath, mode }));
};