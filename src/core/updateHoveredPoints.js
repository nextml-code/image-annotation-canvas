import isDefined from "@codewell/is-defined";
import findHoveredPoints from "./findHoveredPoints";
import { SET_HOVERED_POINTS } from "../store/actionTypes";
import getActiveAnnotation from "./getActiveAnnotation";

const updateHoveredPoints = (state, mousePosition) => {
  if (isDefined(getActiveAnnotation(state))) {
    const { hoveredPoints, mouseIsDown, resizing } = state;
    if (mouseIsDown && resizing) {
      return {
        type: SET_HOVERED_POINTS,
        payload: [],
      };
    }

    const newHoveredPoints = findHoveredPoints(state, mousePosition);
    if (hoveredPoints.length !== newHoveredPoints.length) {
      return {
        type: SET_HOVERED_POINTS,
        payload: newHoveredPoints,
      };
    }
  }

  return null;
};

export default updateHoveredPoints;
