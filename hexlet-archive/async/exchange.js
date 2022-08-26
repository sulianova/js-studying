//ОБМЕНЯТЬ ДАННЫЕ В ДВУХ ФАЙЛАХ

import fs from "fs/promises";

export default async (path1, path2) => {
  const promise1 = fs.readFile(path1, "utf-8");
  const promise2 = fs.readFile(path2, "utf-8");
  const [data1, data2] = await Promise.all([promise1, promise2]);
  await fs.writeFile(path1, `${data2}`);
  await fs.writeFile(path2, `${data1}`);
};

//example
// exchange('/myfile1', '/myfile2');
