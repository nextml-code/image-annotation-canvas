import { boundingBoxToAbsolute } from "./boundingBoxToAbsolute";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";

const drawPolygon = (canvas, state, polygon) => {
  const coordinates = polygon.coordinates.map(
    getAbsoluteCoordinate(state.canvasDimensions),
  );

  if (coordinates.length > 0 && polygon.visible) {
    try {
      const context = canvas.getContext("2d");
      const startCoordinate = coordinates[0];
      context.beginPath();
      context.fillStyle = `${polygon.color}22`; // eslint-disable-line no-param-reassign
      context.strokeStyle = polygon.color; // eslint-disable-line no-param-reassign, max-len
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
        const { x, y, width, height } = boundingBoxToAbsolute(
          state.canvasDimensions,
        )(polygon.bbox);

        context.beginPath();
        context.strokeStyle = `${polygon.color}`; // eslint-disable-line no-param-reassign
        context.setLineDash([10]);
        context.lineWidth = 3;
        context.rect(x, y, width, height);
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
