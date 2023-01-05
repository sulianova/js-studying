export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fsp.writeFile(filepath, preparedData);
  });