export const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

export const getX = (point) => point.x;

export const getY = (point) => point.y;

export const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };
  return segment;
};

export const getBeginPoint = (segment) => segment.beginPoint;

export const getEndPoint = (segment) => segment.endPoint;

export const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};
