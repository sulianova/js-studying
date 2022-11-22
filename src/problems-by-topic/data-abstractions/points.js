const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

const getAngle = (point) => point.angle;

const getRadius = (point) => point.radius;

const getX = (point) =>
  Math.round(getRadius(point) * Math.cos(getAngle(point)));

const getY = (point) =>
  Math.round(getRadius(point) * Math.sin(getAngle(point)));

export { makePoint, getX, getY };
