const isEven = (number) => number % 2 === 0;

export default (numbers) => {
  const firstNumber = numbers[0];
  const newNumbers = numbers.filter(
    (number) => isEven(number) === isEven(firstNumber)
  );
  return newNumbers;
};
