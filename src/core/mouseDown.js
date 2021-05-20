import getCanvasMousePosition from "@codewell/get-canvas-mouse-position";
import isEmpty from "@codewell/is-empty";
import {
  SET_MOUSE_IS_DOWN,
  ADD_POLYGON_COORDINATE,
  SELECT_POINT,
  SET_CURSOR,
  INITIATE_ANNOTATION,
  COMBINE,
} from "../store/actionTypes";
import createPolygon from "./createPolygon";
import { GRABBING_CURSOR } from "./cursorTypes";

const getActions = (state, mousePosition) => {
  const { activeAnnotationId, hoveredPoints, resizing } = state;

  if (activeAnnotationId === null) {
    return [
      {
        type: INITIATE_ANNOTATION,
        payload: createPolygon({ type: state.options.polygonType }),
      },
      {
        type: ADD_POLYGON_COORDINATE,
        payload: mousePosition,
      },
    ];
  }
  if (isEmpty(hoveredPoints)) {
    return resizing
      ? [
          {
            type: ADD_POLYGON_COORDINATE,
            payload: mousePosition,
          },
          {
            type: SET_CURSOR,
            payload: GRABBING_CURSOR,
          },
        ]
      : [
          {
            type: ADD_POLYGON_COORDINATE,
            payload: mousePosition,
          },
        ];
  }

  return resizing
    ? [
        {
          type: SELECT_POINT,
          payload: hoveredPoints[0],
        },
        {
          type: SET_CURSOR,
          payload: GRABBING_CURSOR,
        },
      ]
    : [
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
