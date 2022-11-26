import { SET_CANVAS_ZOOM } from "../store/actionTypes";
import getContext from "../core/getContext";

const SCROLL_SENSITIVITY = 0.0001;

const wheel = (state, dispatch, event) => {
  adjustZoom(state, dispatch, event.deltaY * SCROLL_SENSITIVITY);
};

function adjustZoom(state, dispatch, zoomAmount, zoomFactor) {
  if (!state?.canvasIsDragging) {
    if (zoomAmount) {
      dispatch({
        type: SET_CANVAS_ZOOM,
        payload: clampedZoom(state.canvasZoom + zoomAmount),
      });
    } else if (zoomFactor) {
      dispatch({
        type: SET_CANVAS_ZOOM,
        payload: clampedZoom(state.canvasZoom + state.lastZoom),
      });
    }
  }
}

function clampedZoom(zoom) {
  return Math.max(Math.min(zoom, 10), 1);
}

export default wheel;
