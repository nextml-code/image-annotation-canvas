import { boundingBoxToAbsolute } from "./boundingBoxToAbsolute";
import drawCoordinatePoint from "./drawCoordinatePoint";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";

const textPosition = (context, text, padding, x, y) => {
  const textWidth = context.measureText(text).width;
  const textHeight =
    context.measureText(text).actualBoundingBoxAscent +
    context.measureText(text).actualBoundingBoxDescent;

  return {
    x: x + ((textWidth + padding) / 2 - textWidth / 2),
    y: y + (textHeight + padding / 2) - 2,
  };
};

const drawPolygon = (canvas, state) => (polygon, index) => {
  if (polygon.visible) {
    if (polygon.coordinates.length === 1) {
      const [point] = polygon.coordinates;

      drawCoordinatePoint(canvas, state, [
        polygon.color,
        polygon.color,
        polygon.color,
      ])(point);
    } else {
      try {
        const context = canvas.getContext("2d");
        const coordinates = polygon.coordinates.map(
          getAbsoluteCoordinate(state.canvasDimensions),
        );

        // Draw index in the corner of the box
        if (index !== undefined) {
          const [{ x, y }] = coordinates;
          const numberText = index.toString();

          const fontSize = 18;
          const padding = 16;
          context.beginPath();
          context.fillStyle = polygon.color + "dd";
          context.font = fontSize + "px sans-serif";
          context.fillRect(
            x,
            y,
            context.measureText(numberText).width + padding,
            fontSize + padding / 2,
          );

          const indexNumberPosition = textPosition(
            context,
            numberText,
            padding,
            x,
            y,
          );

          context.fillStyle = "black";
          context.fillText(
            index.toString(),
            indexNumberPosition.x + 1,
            indexNumberPosition.y + 1,
          );
          context.fillStyle = "white";
          context.fillText(
            index.toString(),
            indexNumberPosition.x,
            indexNumberPosition.y,
          );
        }

        if (
          state.config?.polygon?.display === undefined ||
          state.config?.polygon?.display
        ) {
          const [startCoordinate] = coordinates;
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
