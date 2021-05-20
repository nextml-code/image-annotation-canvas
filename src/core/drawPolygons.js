import drawPolygon from "./drawPolygon";
import getUIColor from "./getUIColor";

const drawPolygons = (canvas, state) => {
  return state.annotations.forEach((annotation, index) => {
    drawPolygon(canvas, state, annotation, getUIColor(state, index));
  });
};

export default drawPolygons;
