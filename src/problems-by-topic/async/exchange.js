import fsp from 'fs/promises';

export default async (filepath1, filepath2) => {
  const reading1 = fsp.readFile(filepath1);
  const reading2 = fsp.readFile(filepath2);
  const [data1, data2] = await Promise.all([reading1, reading2]);
  const writing1 = fsp.writeFile(filepath1, data2);
  const writing2 = fsp.writeFile(filepath2, data1);
  await Promise.all([writing1, writing2]);

};