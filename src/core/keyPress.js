import { FINISH_POLYGON, REMOVE_SELECTED_POINT } from "../store/actionTypes";
import movePoint from "./movePoint";

const keyPress = (state, dispatch, event) => {
  event.preventDefault();
  const { key } = event;
  const { keyMap } = state;

  switch (key) {
    case keyMap.finishPolygon: {
      return dispatch({ type: FINISH_POLYGON });
    }

    case keyMap.movePoint: {
      return movePoint(state, dispatch);
    }

    case keyMap.movePointUp: {
      return movePoint(state, dispatch, "up");
    }

    case keyMap.movePointRight: {
      return movePoint(state, dispatch, "right");
    }

    case keyMap.movePointDown: {
      return movePoint(state, dispatch, "down");
    }

    case keyMap.movePointLeft: {
      return movePoint(state, dispatch, "left");
    }

    case keyMap.removePoint: {
      return dispatch({ type: REMOVE_SELECTED_POINT });
    }

    default: {
      return null;
    }
  }
};

export default keyPress;
