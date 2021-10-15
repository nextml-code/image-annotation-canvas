const CIRCLE_RADIUS = 10; // The radius  of the circle

const insidePoint = (compare) => (point) =>
  (compare.x - point.x) ** 2 + (compare.y - point.y) ** 2 <= CIRCLE_RADIUS ** 2;

export default insidePoint;
