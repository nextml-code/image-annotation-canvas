import { SET_CANVAS_OFFSET } from "../store/actionTypes";
import getEventLocation from "./getEventLocation";

const mouseMoveNoEdit = (state, dispatch, event) => {
  if (state.canvasIsDragging) {
    dispatch({
      type: SET_CANVAS_OFFSET,
      payload: {
        x:
          getEventLocation(event).x / state.canvasZoom -
          state.canvasDragStart.x,
        y:
          getEventLocation(event).y / state.canvasZoom -
          state.canvasDragStart.y,
      },
    });
  }
};

export default mouseMoveNoEdit;
