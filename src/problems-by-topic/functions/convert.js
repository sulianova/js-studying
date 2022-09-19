export default (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
};
