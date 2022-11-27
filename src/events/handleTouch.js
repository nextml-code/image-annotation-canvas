import { SET_CANVAS_IS_DRAGGING } from "../store/actionTypes";
import handlePinch from "./handlePinch";

const handleTouch = (state, dispatch, event, singleTouchHandler) => {
  if (event.touches.length == 1) {
    singleTouchHandler(event, state, dispatch);
  } else if (event.type == "touchmove" && event.touches.length == 2) {
    dispatch({ type: SET_CANVAS_IS_DRAGGING, payload: false });
    handlePinch(event, state, dispatch);
  }
};

export default handleTouch;
