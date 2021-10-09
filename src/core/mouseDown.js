import getCanvasMousePosition from "@codewell/get-canvas-mouse-position";
import isEmpty from "@codewell/is-empty";
import {
  SET_MOUSE_IS_DOWN,
  ADD_POLYGON_COORDINATE,
  SELECT_POINT,
  INITIATE_ANNOTATION,
  COMBINE,
} from "../store/actionTypes";
import createPolygon from "./createPolygon";

const getActions = (state, mousePosition) => {
  const { activeAnnotationId, hoveredPoints } = state;

  if (activeAnnotationId === null) {
    return [
      {
        type: INITIATE_ANNOTATION,
        payload: createPolygon(state),
      },
      {
        type: ADD_POLYGON_COORDINATE,
        payload: mousePosition,
      },
    ];
  }

  if (isEmpty(hoveredPoints)) {
    return [
      {
        type: ADD_POLYGON_COORDINATE,
        payload: mousePosition,
      },
    ];
  }

  return [
    {
      type: SELECT_POINT,
      payload: hoveredPoints[0],
    },
  ];
};

const mouseDown = (state, dispatch, event) => {
  const mousePosition = getCanvasMousePosition(event);

  dispatch({
    type: COMBINE,
    payload: [
      {
        type: SET_MOUSE_IS_DOWN,
        payload: true,
      },
      ...getActions(state, mousePosition),
    ],
  });
};

export default mouseDown;
