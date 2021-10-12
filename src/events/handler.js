import getCanvasMousePosition from "@codewell/get-canvas-mouse-position";
import {
  KEY_UP,
  MOUSE_MOVE,
  MOUSE_DOWN,
  MOUSE_UP,
  DOUBLE_CLICK,
  KEY_DOWN,
} from "./eventTypes";
import { FINISH_POLYGON } from "../store/actionTypes";

import keyDown from "./keyDown";
import keyUp from "./keyUp";
import mouseDown from "./mouseDown";
import mouseMove from "./mouseMove";
import mouseUp from "./mouseUp";

const eventHandler = (state, dispatch, allowEdit) => (event) => {
  if (!allowEdit) {
    return;
  }

  switch (event.type) {
    case DOUBLE_CLICK: {
      dispatch({ type: FINISH_POLYGON });
      break;
    }

    case MOUSE_DOWN: {
      mouseDown(state, dispatch, event);
      break;
    }

    case MOUSE_UP: {
      mouseUp(dispatch);
      break;
    }

    case MOUSE_MOVE: {
      mouseMove(state, dispatch, getCanvasMousePosition(event));
      break;
    }

    case KEY_DOWN: {
      keyDown(state, dispatch, event);
      break;
    }

    case KEY_UP: {
      keyUp(state, dispatch, event);
      break;
    }

    default: {
      // If none of the above events happen
      // we should do absolutely nothing...
    }
  }
};

export default eventHandler;
