export default (point1, point2) => {
  const result = {};

  result.x = (point1.x + point2.x) / 2;
  result.y = (point1.y + point2.y) / 2;
  return result;
};
