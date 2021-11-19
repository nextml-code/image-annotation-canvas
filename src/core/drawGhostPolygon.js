import last from "@codewell/last";
import drawPolygon from "./drawPolygon.js";
import getActiveAnnotation from "./getActiveAnnotation";
import getRelativeCoordinate from "./getRelativeCoordinate";
import createBoundingBox from "./createBoundingBox";

const condition = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  if (activeAnnotation === undefined) {
    return false;
  }

  return activeAnnotation.coordinates.length > 0;
};

const createGhostPolygon = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  return {
    coordinates: [
      activeAnnotation.coordinates[0],
      last(activeAnnotation.coordinates),
      getRelativeCoordinate(state.canvasDimensions, state.mousePosition),
    ],
    bbox: createBoundingBox([
      ...activeAnnotation.coordinates,
      getRelativeCoordinate(state.canvasDimensions, state.mousePosition),
    ]),
    lineDash: [10],
    visible: true,
    color: "#F67EFB",
  };
};

const drawGhostPolygon = (canvas, state) => {
  if (condition(state)) {
    return drawPolygon(canvas, state)(createGhostPolygon(state));
  }

  return null;
};

export default drawGhostPolygon;
