import getAbsoluteCoordinate from "./getAbsoluteCoordinate";
import getSelectedPoint from "./getSelectedPoint";

const POINT_SIZE = 2;
const COLOR_SCHEME = ["#fa8231", "#f1c40f"];

const drawSelectedPoint = (canvas, state) => {
  const selectedPoint = getSelectedPoint(state);

  if (selectedPoint !== undefined) {
    try {
      const absolouteCoordinate = getAbsoluteCoordinate(state.canvasDimensions)(
        selectedPoint,
      );
      const context = canvas.getContext("2d");
      const [border, center] = COLOR_SCHEME;
      context.beginPath();
      context.fillStyle = border;
      context.arc(
        absolouteCoordinate.x,
        absolouteCoordinate.y,
        POINT_SIZE + POINT_SIZE,
        0,
        2 * Math.PI,
      );
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = center;
      context.arc(
        absolouteCoordinate.x,
        absolouteCoordinate.y,
        POINT_SIZE,
        0,
        2 * Math.PI,
      );
      context.fill();
      context.closePath();
    } catch (error) {
      console.log(error);
    }
  }
};

export default drawSelectedPoint;
