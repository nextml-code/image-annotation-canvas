import {
  COMBINE,
  SET_CANVAS_IS_DRAGGING,
  SET_CANVAS_DRAG_START,
} from "../store/actionTypes";
import getEventLocation from "./getEventLocation";

const mouseDownNoEdit = (state, dispatch, event) => {
  dispatch({
    type: COMBINE,
    payload: [
      { type: SET_CANVAS_IS_DRAGGING, payload: true },
      {
        type: SET_CANVAS_DRAG_START,
        payload: {
          x:
            getEventLocation(event).x / state.canvasZoom - state.canvasOffset.x,
          y:
            getEventLocation(event).y / state.canvasZoom - state.canvasOffset.y,
        },
      },
    ],
  });
};

export default mouseDownNoEdit;
