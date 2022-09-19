const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  return text;
};
