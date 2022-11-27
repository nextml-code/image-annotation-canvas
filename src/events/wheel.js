import { SET_CANVAS_ZOOM } from "../store/actionTypes";
import adjustZoom from "./adjustZoom";

const SCROLL_SENSITIVITY = 0.0005;

const wheel = (state, dispatch, event) => {
  adjustZoom(state, dispatch, event.deltaY * SCROLL_SENSITIVITY);
};

export default wheel;
