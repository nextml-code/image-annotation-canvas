import { SET_CURSOR } from "../store/actionTypes";
import { DEFAULT_CURSOR, GRABBING_CURSOR, POINTER_CURSOR } from "./cursorTypes";

const updateCursor = (state) => {
  const { hoveredPoints, mouseIsDown, resizing } = state;

  if (mouseIsDown) {
    if (resizing) {
      return {
        type: SET_CURSOR,
        payload: GRABBING_CURSOR,
      };
    }
  } else if (hoveredPoints.length > 0) {
    return {
      type: SET_CURSOR,
      payload: POINTER_CURSOR,
    };
  } else {
    return {
      type: SET_CURSOR,
      payload: DEFAULT_CURSOR,
    };
  }

  return null;
};

export default updateCursor;
