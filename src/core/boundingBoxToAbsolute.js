export const boundingBoxToAbsolute = (canvasDimensions) => (boundingBox) => {
  const { x, y, width, height } = boundingBox;

  return {
    x: Math.round(x * canvasDimensions.width),
    y: Math.round(y * canvasDimensions.height),
    width: Math.round(width * canvasDimensions.width),
    height: Math.round(height * canvasDimensions.height),
  };
};
