import drawCoordinatePoint from "../drawCoordinatePoint";

const drawHoveredPoints = (canvas, state) => {
  return state.hoveredPoints.forEach(
    drawCoordinatePoint(canvas, state, ["#fd9644", "#fa8231", "#f7b731"]),
  );
};

export default drawHoveredPoints;
