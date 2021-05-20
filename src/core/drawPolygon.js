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
      context.fillStyle = `${color}22`; // eslint-disable-line no-param-reassign
      context.strokeStyle = color; // eslint-disable-line no-param-reassign, max-len
      context.lineWidth = 4;
      context.setLineDash([]);
      context.moveTo(startCoordinate.x, startCoordinate.y);
      coordinates.slice(1).forEach((coordinate) => {
        context.lineTo(coordinate.x, coordinate.y);
      });
      context.closePath();
      context.fill();
      context.stroke();

      if (state.options.displayBoundingBox) {
        const boxCoordinates = polygon.bbox.coordinates.map(
          getAbsoluteCoordinate(state.canvasDimensions),
        );
        const startBoxCoordinate = boxCoordinates[0];
        context.beginPath();
        context.strokeStyle = `${color}`; // eslint-disable-line no-param-reassign
        context.setLineDash([10]);
        context.lineWidth = 3;
        context.moveTo(startBoxCoordinate.x, startBoxCoordinate.y);
        boxCoordinates.slice(1).forEach((coordinate) => {
          context.lineTo(coordinate.x, coordinate.y);
        });
        context.closePath();
        context.stroke();
      }
    } catch (error) {
      // throw new Error(niceError(drawPolygon, error));
      console.log(error);
    }
  }
};

export default drawPolygon;
