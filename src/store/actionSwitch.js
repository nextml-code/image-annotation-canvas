import {
  ADD_POLYGON_COORDINATE,
  FINISH_POLYGON,
  INITIATE_ANNOTATION,
  REPLACE_POINT,
  SELECT_POINT,
  REMOVE_SELECTED_POINT,
  REMOVE_ANNOTATION_BY_ID,
  EDIT_ANOTATION_BY_ID,
  POP_ANNOTATION,
  POP_COORDINATE,
  INITIATE_CONFIG,
  SET_CANVAS_ZOOM,
  SET_CANVAS_IS_DRAGGING,
  SET_CANVAS_OFFSET,
  SET_CANVAS_DRAG_START,
  SET_INITIAL_PINCH_DISTANCE,
  SET_LAST_CANVAS_ZOOM,
} from "./actionTypes";
import addPolygonCoordinate from "./actions/addPolygonCoordinate";
import selectPoint from "./actions/selectPoint";
import initiateAnnotation from "./actions/initiateAnnotation";
import replacePoint from "./actions/replacePoint";
import removeSelectedPoint from "./actions/removeSelectedPoint";
import modifyActiveAnnotation from "../core/modifyActiveAnnotation";
import getActiveAnnotation from "../core/getActiveAnnotation";

const actionSwitch = (state, action) => {
  switch (action.type) {
    case INITIATE_CONFIG: {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    }

    case INITIATE_ANNOTATION: {
      return initiateAnnotation(state, action);
    }

    case SELECT_POINT: {
      return selectPoint(state, action);
    }

    case ADD_POLYGON_COORDINATE: {
      return addPolygonCoordinate(state, action);
    }

    case FINISH_POLYGON: {
      if (
        getActiveAnnotation(state).coordinates.length >=
          state.config?.minCoordinates ||
        state.config?.minCoordinates === undefined
      ) {
        // Add the annotation to the complete
        // list of annotations
        return {
          ...state,
          activeAnnotationId: null,
          selectedPoint: null,
        };
      }

      return state;
    }

    case REPLACE_POINT: {
      return replacePoint(state, action);
    }

    case REMOVE_SELECTED_POINT: {
      return removeSelectedPoint(state);
    }

    case REMOVE_ANNOTATION_BY_ID: {
      return {
        ...state,
        annotations: state.annotations.filter((a) => a.id !== action.payload),
        activeAnnotationId: null,
      };
    }

    case EDIT_ANOTATION_BY_ID: {
      return {
        ...state,
        annotations: state.annotations.map((annotation) => {
          if (annotation.id === action.payload.id) {
            return {
              ...annotation,
              ...action.payload,
            };
          }
          return annotation;
        }),
      };
    }

    case POP_ANNOTATION: {
      return {
        ...state,
        annotations: state.annotations.filter(
          (annotation) => annotation.id !== state.activeAnnotationId,
        ),

        activeAnnotationId: null,
      };
    }

    case POP_COORDINATE: {
      return {
        ...state,
        annotations: modifyActiveAnnotation(state, (activeAnnotation) => {
          return {
            ...activeAnnotation,
            coordinates: activeAnnotation.coordinates.slice(
              0,
              activeAnnotation.coordinates.length - 1,
            ),
          };
        }),
      };
    }
    case SET_CANVAS_ZOOM: {
      return {
        ...state,
        canvasZoom: action,
      };
    }
    case SET_CANVAS_IS_DRAGGING: {
      return {
        ...state,
        canvasIsDragging: action,
      };
    }
    case SET_CANVAS_OFFSET: {
      return {
        ...state,
        canvasOffset: action,
      };
    }
    case SET_CANVAS_DRAG_START: {
      return {
        ...state,
        canvasDragStart: action,
      };
    }
    case SET_INITIAL_PINCH_DISTANCE: {
      return {
        ...state,
        initialPinchDistance: action,
      };
    }
    case SET_LAST_CANVAS_ZOOM: {
      return {
        ...state,
        lastCanvasZoom: action,
      };
    }

    default:
      return state;
  }
};

export default actionSwitch;
