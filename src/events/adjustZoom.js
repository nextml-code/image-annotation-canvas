import { SET_CANVAS_ZOOM } from "../store/actionTypes";

const adjustZoom = (state, dispatch, zoomAmount, zoomFactor) => {
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
};

const clampedZoom = (zoom) => {
  return Math.max(Math.min(zoom, 10), 1);
};

export default adjustZoom;
