import { COMBINE, SET_MOUSE_IS_DOWN, SET_RESIZING } from "../store/actionTypes";

const mouseUp = (dispatch) => {
  dispatch({
    type: COMBINE,
    payload: [
      {
        type: SET_MOUSE_IS_DOWN,
        payload: false,
      },
      {
        type: SET_RESIZING,
        payload: false,
      },
    ],
  });
};

export default mouseUp;
