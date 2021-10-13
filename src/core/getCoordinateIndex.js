const getCoordinateIndex = (coordinates, coordinate) =>
  coordinates
    .map((p, index) => ({ ...p, index }))
    .filter((c) => c.id === coordinate.id)[0].index;

export default getCoordinateIndex;
