import last from "@codewell/last";
import and from "@codewell/and";
import drawPolygon from "./drawPolygon";
import getActiveAnnotation from "./getActiveAnnotation";
import getRelativeCoordinate from "./getRelativeCoordinate";
import createBoundingBox from "./createBoundingBox";
import { BOUNDING_BOX } from "./polygonTypes";

const condition = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  if (activeAnnotation === undefined) {
    return false;
  }

  return and([activeAnnotation.coordinates.length > 1, state.showGhostPolygon]);
};

const createGhostPolygon = (state) => {
  const activeAnnotation = getActiveAnnotation(state);
  if (activeAnnotation.type === BOUNDING_BOX) {
    return {
      type: BOUNDING_BOX,
      bbox: createBoundingBox([
        ...activeAnnotation.coordinates,
        getRelativeCoordinate(state.canvasDimensions, state.mousePosition),
      ]),
      visible: true,
    };
  }
  return {
    coordinates: [
      activeAnnotation.coordinates[0],
      last(activeAnnotation.coordinates),
      getRelativeCoordinate(state.canvasDimensions, state.mousePosition),
    ],
    visible: true,
  };
};

const drawGhostPolygon = (canvas, state) => {
  if (condition(state)) {
    return drawPolygon(canvas, state, createGhostPolygon(state), "#666666");
  }

  return null;
};

export default drawGhostPolygon;
