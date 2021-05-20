const getPointIndex = (points, point) =>
  points
    .map((p, index) => ({ ...p, index }))
    .filter((p) => p.id === point.id)[0].index;

export default getPointIndex;
