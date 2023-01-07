import { resolve } from "path";

export default (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export const wait = (str) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      str.toLowerCase();
      resolve();
    } catch (e) {
      // throw new Error(e);
      reject(e);
    }
  }, 3000);
});

// example
// myFunc(6789)
//     .then(() => console.log('success'))
//     .catch(() => console.log('error'));