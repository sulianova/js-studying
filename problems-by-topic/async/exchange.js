// ОБМЕНЯТЬ ДАННЫЕ В ДВУХ ФАЙЛАХ

import fsp from 'fs/promises';

export default async (path1, path2) => {
  const promise1 = fsp.readFile(path1, 'utf-8');
  const promise2 = fsp.readFile(path2, 'utf-8');
  const [data1, data2] = await Promise.all([promise1, promise2]);
  await fsp.writeFile(path1, `${data2}`);
  await fsp.writeFile(path2, `${data1}`);
};

// example
// exchange('/myfile1', '/myfile2');
