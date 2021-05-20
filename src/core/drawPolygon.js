import createBoundingBox from "./createBoundingBox";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";
import { BOUNDING_BOX } from "./polygonTypes";

const getCoordinates = (polygon) => {
  if (polygon.type === BOUNDING_BOX) {
    return polygon.bbox.coordinates;
  }

  return polygon.coordinates;
};

const drawPolygon = (canvas, state, polygon, color) => {
  const coordinates = getCoordinates(polygon).map(
    getAbsoluteCoordinate(state.canvasDimensions),
  );

  if (coordinates.length > 0 && polygon.visible) {
    try {
      const context = canvas.getContext("2d");
      const startCoordinate = coordinates[0];
      context.beginPath();
      context.fillStyle = `${color}88`; // eslint-disable-line no-param-reassign
      context.strokeStyle = color; // eslint-disable-line no-param-reassign, max-len
      context.moveTo(startCoordinate.x, startCoordinate.y);
      coordinates.slice(1).forEach((coordinate) => {
        context.lineTo(coordinate.x, coordinate.y);
      });
      context.closePath();
      context.fill();
    } catch (error) {
      // throw new Error(niceError(drawPolygon, error));
      console.log(error);
    }
  }
};

export default drawPolygon;
