import isDefined from "@codewell/is-defined";
import updateHoveredPoints from "../core/hoveredPoints/updateHoveredPoints";
import updateCursor from "../core/updateCursor";
import {
  SET_MOUSE_POSITION,
  REPLACE_POINT,
  COMBINE,
} from "../store/actionTypes";
import getRelativeCoordinate from "../core/getRelativeCoordinate";

const getAction = (state, mousePosition) => {
  const { mouseIsDown, selectedPoint, canvasDimensions } = state;

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
