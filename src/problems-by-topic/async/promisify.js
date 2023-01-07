export default (asyncFn) => (...args) => {
  const promise = new Promise((resolve, reject) => {
    asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
  });
  return promise;
};