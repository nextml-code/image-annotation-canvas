import { boundingBoxToAbsolute } from "./boundingBoxToAbsolute";
import drawCoordinatePoint from "./drawCoordinatePoint";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";

const drawPolygon = (canvas, state, polygon) => {
  if (polygon.visible) {
    if (polygon.coordinates.length === 1) {
      const [point] = polygon.coordinates;

      drawCoordinatePoint(canvas, state, [
        polygon.color,
        polygon.color,
        polygon.color,
      ])(point);
    } else {
      const coordinates = polygon.coordinates.map(
        getAbsoluteCoordinate(state.canvasDimensions),
      );
      try {
        const context = canvas.getContext("2d");

        if (
          state.config?.polygon?.display === undefined ||
          state.config?.polygon?.display
        ) {
          const startCoordinate = coordinates[0];
          context.beginPath();
          context.fillStyle = `${polygon.color}22`; // eslint-disable-line no-param-reassign
          context.strokeStyle = polygon.color; // eslint-disable-line no-param-reassign, max-len
          context.setLineDash(
            polygon.lineDash || state.config?.polygon?.lineDash || [],
          );
          context.lineWidth = state.config?.polygon?.lineWidth || 3;
          context.moveTo(startCoordinate.x, startCoordinate.y);
          coordinates.slice(1).forEach((coordinate) => {
            context.lineTo(coordinate.x, coordinate.y);
          });
          context.closePath();
          context.fill();
          context.stroke();
        }

        if (state.config?.bbox?.display) {
          const { x, y, width, height } = boundingBoxToAbsolute(
            state.canvasDimensions,
          )(polygon.bbox);

          context.beginPath();
          context.strokeStyle = `${polygon.color}`; // eslint-disable-line no-param-reassign
          context.setLineDash(
            polygon.lineDash || state.config?.bbox?.lineDash || [],
          );
          context.lineWidth = state.config?.bbox?.lineWidth || 3;
          context.rect(x, y, width, height);
          context.closePath();
          context.stroke();
        }
      } catch (error) {
        // throw new Error(niceError(drawPolygon, error));
        console.log(error);
      }
    }
  }
};

export default drawPolygon;
