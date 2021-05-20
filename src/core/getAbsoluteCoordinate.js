const getAbsoluteCoordinate = (canvasDimensions) => (coordinate) => {
  const { width, height } = canvasDimensions;

  // coordinates a number between 0 and 1
  const { x, y } = coordinate;

  return {
    x: Math.round(x * width),
    y: Math.round(y * height),
  };
};

export default getAbsoluteCoordinate;
