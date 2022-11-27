import { SET_CANVAS_OFFSET } from "../store/actionTypes";
import getEventLocation from "./getEventLocation";

const mouseMoveNoEdit = (state, dispatch, event) => {
  if (state.canvasIsDragging) {
    dispatch({
      type: SET_CANVAS_OFFSET,
      payload: {
        x: clampedCanvasOffset(
          getEventLocation(event).x / state.canvasZoom -
            state.canvasDragStart.x,
          state.canvasDimensions.width,
          state.canvasZoom,
        ),
        y: clampedCanvasOffset(
          getEventLocation(event).y / state.canvasZoom -
            state.canvasDragStart.y,
          state.canvasDimensions.height,
          state.canvasZoom,
        ),
      },
    });
  }
};

const clampedCanvasOffset = (offset, dimension, zoom) => {
  const maxOffset = (dimension - dimension / zoom) / 2;
  return Math.max(Math.min(offset, maxOffset), -maxOffset);
};

export default mouseMoveNoEdit;
