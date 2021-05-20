import { SET_RESIZING } from "../store/actionTypes";

const keyUp = (state, dispatch, event) => {
  event.preventDefault();
  const { key } = event;
  const { keyMap } = state;

  switch (key) {
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
