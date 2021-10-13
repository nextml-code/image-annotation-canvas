import {
  SET_RESIZING,
  SET_EDIT_COORDINATES,
  COMBINE,
  SET_ACTIVE_ANNOTATION_ID,
  SELECT_POINT,
} from "../store/actionTypes";

const keyUp = (state, dispatch, event) => {
  event.preventDefault();
  const { key } = event;
  const { keyMap } = state;

  switch (key) {
    case keyMap.edit: {
      return dispatch({
        type: COMBINE,
        payload: [
          { type: SET_EDIT_COORDINATES, payload: false },
          { type: SET_ACTIVE_ANNOTATION_ID, payload: null },
          { type: SELECT_POINT, payload: null },
        ],
      });
    }

    case keyMap.movePoint: {
      return dispatch({
        type: SET_RESIZING,
        payload: false,
      });
    }

    default: {
      // pass
    }
  }
};

export default keyUp;
