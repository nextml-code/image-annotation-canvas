import getCanvasMousePosition from "@codewell/get-canvas-mouse-position";
import mouseDown from "./mouseDown";
import mouseUp from "./mouseUp";
import mouseMove from "./mouseMove";

import {
  KEY_PRESS,
  KEY_UP,
  MOUSE_MOVE,
  MOUSE_DOWN,
  MOUSE_UP,
} from "./eventTypes";
import keyPress from "./keyPress";
import keyUp from "./keyUp";

const canvasEngine = (state, dispatch) => (event) => {
  switch (event.type) {
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

    case KEY_PRESS: {
      keyPress(state, dispatch, event);
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

export default canvasEngine;
