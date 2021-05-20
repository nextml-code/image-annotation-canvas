import distance from "@codewell/distance";
import last from "@codewell/last";
import or from "@codewell/or";
import isDefined from "@codewell/is-defined";
import { ADD_POLYGON_COORDINATE } from "../store/actionTypes";
import getActiveAnnotation from "./getActiveAnnotation";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";

const autoAddPoint = (state, mousePosition) => {
  const { resizing, mouseIsDown } = state;
  const activeAnnotation = getActiveAnnotation(state);

  if (isDefined(activeAnnotation)) {
    const { coordinates } = activeAnnotation;
    if (!resizing && mouseIsDown) {
      if (
        or(
          coordinates.length === 0,
          distance(
            mousePosition,
            getAbsoluteCoordinate(state.canvasDimensions)(last(coordinates)),
          ) > 10,
        )
      ) {
        return {
          type: ADD_POLYGON_COORDINATE,
          payload: mousePosition,
        };
      }
    }
  }

  return null;
};

export default autoAddPoint;
