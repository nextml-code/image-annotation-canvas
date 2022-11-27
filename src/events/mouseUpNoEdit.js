import {
  COMBINE,
  SET_CANVAS_IS_DRAGGING,
  SET_INITIAL_PINCH_DISTANCE,
  SET_LAST_CANVAS_ZOOM,
} from "../store/actionTypes";

const mouseUpNoEdit = (state, dispatch) => {
  dispatch({
    type: COMBINE,
    payload: [
      { type: SET_CANVAS_IS_DRAGGING, payload: false },
      { type: SET_INITIAL_PINCH_DISTANCE, payload: null },
      { type: SET_LAST_CANVAS_ZOOM, payload: state.canvasZoom },
    ],
  });
};

export default mouseUpNoEdit;
