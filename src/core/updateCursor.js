import { SET_CURSOR } from "../store/actionTypes";
import { DEFAULT_CURSOR, GRABBING_CURSOR, POINTER_CURSOR } from "./cursorTypes";

const updateCursor = (state) => {
  const { hoveredPoints, mouseIsDown } = state;

  if (hoveredPoints.length > 0) {
    if (mouseIsDown) {
      return {
        type: SET_CURSOR,
        payload: GRABBING_CURSOR,
      };
    }
    return {
      type: SET_CURSOR,
      payload: POINTER_CURSOR,
    };
  }
  return {
    type: SET_CURSOR,
    payload: DEFAULT_CURSOR,
  };
};

export default updateCursor;
