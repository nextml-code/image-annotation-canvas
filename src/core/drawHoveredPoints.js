import prepareDrawCoordinatePoint from "./drawCoordinatePoint";

const drawHoveredPoints = (canvas, state) => {
  const drawCoordinatePoint = prepareDrawCoordinatePoint(canvas, state, [
    "#fd9644",
    "#fa8231",
    "#f7b731",
  ]);
  return state.hoveredPoints.forEach(drawCoordinatePoint);
};

export default drawHoveredPoints;
