import getCanvasMousePosition from "@codewell/get-canvas-mouse-position";
import {
  KEY_UP,
  MOUSE_MOVE,
  MOUSE_DOWN,
  MOUSE_UP,
  DOUBLE_CLICK,
  KEY_DOWN,
  WHEEL,
  TOUCH_START,
  TOUCH_END,
  TOUCH_MOVE,
} from "./eventTypes";
import { COMBINE, FINISH_POLYGON, POP_COORDINATE } from "../store/actionTypes";

import keyDown from "./keyDown";
import keyUp from "./keyUp";
import mouseDown from "./mouseDown";
import mouseMove from "./mouseMove";
import mouseUp from "./mouseUp";
import mouseDownNoEdit from "./mouseDownNoEdit";
import mouseMoveNoEdit from "./mouseMoveNoEdit";
import mouseUpNoEdit from "./mouseUpNoEdit";
import wheel from "./wheel";
import handleTouch from "./handleTouch";

const eventHandler = (state, dispatch, allowEdit, eventCallback) => (event) => {
  if (eventCallback !== undefined) {
    eventCallback(event);
  }

  if (!allowEdit) {
    switch (event.type) {
      case MOUSE_DOWN: {
        mouseDownNoEdit(state, dispatch, event);
        break;
      }
      case TOUCH_START: {
        handleTouch(state, dispatch, event, mouseDownNoEdit);
        break;
      }
      case MOUSE_MOVE: {
        mouseMoveNoEdit(state, dispatch, event);
        break;
      }
      case TOUCH_MOVE: {
        handleTouch(state, dispatch, event, mouseMoveNoEdit);
        break;
      }
      case MOUSE_UP: {
        mouseUpNoEdit(state, dispatch);
        break;
      }
      case TOUCH_END: {
        handleTouch(state, dispatch, event, mouseUpNoEdit);
        break;
      }
      case WHEEL: {
        wheel(state, dispatch, event);
      }
      default: {
      }
    }
  } else {
    switch (event.type) {
      case DOUBLE_CLICK: {
        dispatch({
          type: COMBINE,
          payload: [{ type: POP_COORDINATE }, { type: FINISH_POLYGON }],
        });
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
  }
};

export default eventHandler;
