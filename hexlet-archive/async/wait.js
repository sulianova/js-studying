//ТАЙМЕР-ПРОМИС
export default (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

//alternative version
// export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//check
// wait(1000).then(() => console.log('time is over!'));

//ТАЙМЕР-ПРОМИС, который ловит и выводит ошибку
const myFunc = (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        str.toLowerCase();
        resolve();
      } catch (e) {
        // throw new Error(e);
        reject(e);
      }
    }, 3000);
  });
};

//example
// myFunc(6789)
//     .then(() => console.log('success'))
//     .catch(() => console.log('error'));
