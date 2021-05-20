import isDefined from "@codewell/is-defined";
import updateHoveredPoints from "./updateHoveredPoints";
import updateCursor from "./updateCursor";
import {
  SET_MOUSE_POSITION,
  REPLACE_POINT,
  COMBINE,
} from "../store/actionTypes";
import getRelativeCoordinate from "./getRelativeCoordinate";

const getAction = (state, mousePosition) => {
  const { activeAnnotationId, mouseIsDown, selectedPoint, canvasDimensions } =
    state;

  if (activeAnnotationId === null) {
    return {
      type: "",
      payload: null,
    };
  }

  if (mouseIsDown) {
    return {
      type: REPLACE_POINT,
      payload: {
        id: selectedPoint,
        ...getRelativeCoordinate(canvasDimensions, mousePosition),
      },
    };
  }

  return null;
};

const mouseMove = (state, dispatch, mousePosition) =>
  dispatch({
    type: COMBINE,
    payload: [
      {
        type: SET_MOUSE_POSITION,
        payload: mousePosition,
      },
      getAction(state, mousePosition),
      updateHoveredPoints(state, mousePosition),
      updateCursor(state),
    ].filter(isDefined),
  });

export default mouseMove;
