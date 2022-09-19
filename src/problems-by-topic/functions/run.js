export default (text) => {
  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const strReverse = str.split('').reverse().join('');

    return strReverse.slice(0, length);
  };

  return takeLast(text, 4);
};
