import drawCoordinatePoint from "../drawCoordinatePoint";

const drawHoveredPoints = (canvas, state) => {
  return state.hoveredPoints.forEach(
    drawCoordinatePoint(canvas, state, ["#F67EFB", "#ffffff", "#F67EFB"]),
  );
};

export default drawHoveredPoints;
