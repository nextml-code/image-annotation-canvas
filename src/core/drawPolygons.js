import drawPolygon from "./drawPolygon";

const drawPolygons = (canvas, state) =>
  state.annotations.forEach((annotation) => {
    drawPolygon(canvas, state, annotation);
  });

export default drawPolygons;
