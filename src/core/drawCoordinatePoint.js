import getAbsoluteCoordinate from "./getAbsoluteCoordinate";
import getContext from "./getContext";

const POINT_SIZE = 1;
const DEFAULT_COLORS = ["#4b7bec", "#2d98da", "#45aaf2"];

const drawCoordinatePoint =
  (canvas, state, colorScheme = DEFAULT_COLORS) =>
  (coordinate) => {
    try {
      const absoluteCoordinate = getAbsoluteCoordinate(state.canvasDimensions)(
        coordinate,
      );
      const context = getContext(canvas);
      const [border, middle, center] = colorScheme;
      context.beginPath();
      context.fillStyle = border;
      context.arc(
        absoluteCoordinate.x,
        absoluteCoordinate.y,
        POINT_SIZE + 2,
        0,
        2 * Math.PI,
      );
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = middle;
      context.arc(
        absoluteCoordinate.x,
        absoluteCoordinate.y,
        POINT_SIZE + 1,
        0,
        2 * Math.PI,
      );
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = center;
      context.arc(
        absoluteCoordinate.x,
        absoluteCoordinate.y,
        POINT_SIZE,
        0,
        2 * Math.PI,
      );
      context.fill();
      context.closePath();
    } catch (error) {
      console.log(error);
    }
  };

export default drawCoordinatePoint;
