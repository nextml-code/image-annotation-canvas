import { boundingBoxToAbsolute } from "./boundingBoxToAbsolute";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";

<<<<<<< HEAD
const drawPolygon = (canvas, state, polygon) => {
=======
const drawPolygon = (canvas, state, polygon, color) => {
>>>>>>> 98a94e4 (feature: add configuration options)
  const coordinates = polygon.coordinates.map(
    getAbsoluteCoordinate(state.canvasDimensions),
  );

  if (coordinates.length > 0 && polygon.visible) {
    try {
      const context = canvas.getContext("2d");

      if (
        state.config?.polygon?.display === undefined ||
        state.config?.polygon?.display
      ) {
        const startCoordinate = coordinates[0];
        context.beginPath();
<<<<<<< HEAD
        context.fillStyle = `${polygon.color}22`; // eslint-disable-line no-param-reassign
        context.strokeStyle = polygon.color; // eslint-disable-line no-param-reassign, max-len
        context.lineWidth = 4;
        context.setLineDash([]);
=======
        context.fillStyle = `${color}22`; // eslint-disable-line no-param-reassign
        context.strokeStyle = color; // eslint-disable-line no-param-reassign, max-len
        context.setLineDash(state.config?.polygon?.lineDash || []);
        context.lineWidth = state.config?.polygon?.lineWidth || 3;
>>>>>>> 98a94e4 (feature: add configuration options)
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
<<<<<<< HEAD
        context.strokeStyle = `${polygon.color}`; // eslint-disable-line no-param-reassign
        context.setLineDash(state.config.bbox.lineDash || []);
        context.lineWidth = state.config.bbox.lineWidth || 3;
=======
        context.strokeStyle = `${color}`; // eslint-disable-line no-param-reassign
        context.setLineDash(state.config?.bbox?.lineDash || []);
        context.lineWidth = state.config?.bbox?.lineWidth || 3;
>>>>>>> 98a94e4 (feature: add configuration options)
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
