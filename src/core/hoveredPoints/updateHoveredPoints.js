import findHoveredPoints from "./findHoveredPoints";
import { SET_HOVERED_POINTS } from "../../store/actionTypes";

const updateHoveredPoints = (state, mousePosition) => {
  const { hoveredPoints, mouseIsDown, resizing } = state;
  if (mouseIsDown && resizing) {
    return {
      type: SET_HOVERED_POINTS,
      payload: [],
    };
  }

  const nextHoveredPoints = findHoveredPoints(state, mousePosition);

  if (hoveredPoints.length !== nextHoveredPoints.length) {
    return {
      type: SET_HOVERED_POINTS,
      payload: nextHoveredPoints,
    };
  }
};

export default updateHoveredPoints;
