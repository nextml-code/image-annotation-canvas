import { SET_RESIZING, SET_EDIT_COORDINATES } from "../store/actionTypes";

const keyUp = (state, dispatch, event) => {
  event.preventDefault();
  const { key } = event;
  const { keyMap } = state;

  switch (key) {
    case keyMap.edit: {
      return dispatch({ type: SET_EDIT_COORDINATES, payload: false });
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
