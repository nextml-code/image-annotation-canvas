const getRelativeCoordinate = (canvasDimensions, coordinate) => {
  const { width, height } = canvasDimensions;
  const { x, y } = coordinate;

  // return coordinates as a number
  // between 0 and 1 i.e. percentage
  // of image width, height
  return {
    x: x / width,
    y: y / height,
  };
};

export default getRelativeCoordinate;
