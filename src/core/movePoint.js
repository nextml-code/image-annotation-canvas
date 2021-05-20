import {
  SET_RESIZING,
  SET_CURSOR,
  REPLACE_POINT,
  COMBINE,
} from "../store/actionTypes";
import getAbsoluteCoordinate from "./getAbsoluteCoordinate";
import getRelativeCoordinate from "./getRelativeCoordinate";
import getSelectedPoint from "./getSelectedPoint";

const increment = (val) => val + 1;
const decrement = (val) => val - 1;

const modifyCoordinate = (state, coordinate, key, func) => {
  const absoluteCoordinate = getAbsoluteCoordinate(state.canvasDimensions)(
    coordinate,
  );
  return {
    ...coordinate,
    ...getRelativeCoordinate(state.canvasDimensions, {
      ...absoluteCoordinate,
      [key]: func(absoluteCoordinate[key]),
    }),
  };
};

const movePoint = (state, dispatch, direction) => {
  const { resizing } = state;
  const selectedPoint = getSelectedPoint(state);

  switch (direction) {
    case "up": {
      return dispatch({
        type: REPLACE_POINT,
        payload: modifyCoordinate(state, selectedPoint, "y", decrement),
      });
    }

    case "right": {
      return dispatch({
        type: REPLACE_POINT,
        payload: modifyCoordinate(state, selectedPoint, "x", increment),
      });
    }

    case "down": {
      return dispatch({
        type: REPLACE_POINT,
        payload: modifyCoordinate(state, selectedPoint, "y", increment),
      });
    }

    case "left": {
      return dispatch({
        type: REPLACE_POINT,
        payload: modifyCoordinate(state, selectedPoint, "x", decrement),
      });
    }

    default: {
      if (!resizing) {
        return dispatch({
          type: COMBINE,
          payload: [
            {
              type: SET_RESIZING,
              payload: true,
            },
            {
              type: SET_CURSOR,
              payload: "grab",
            },
          ],
        });
      }
      return null;
    }
  }
};

export default movePoint;
