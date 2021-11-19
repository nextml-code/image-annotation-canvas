import drawPolygon from "./drawPolygon.js";

const drawPolygons = (canvas, state) =>
  state.annotations.forEach(drawPolygon(canvas, state));

export default drawPolygons;
