export default (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));

  return diffs.reduce(
    (index, diff, currentIndex) => (diff < diffs[index] ? currentIndex : index),
    0);
};
