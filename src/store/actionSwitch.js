import {
  ADD_POLYGON_COORDINATE,
  FINISH_POLYGON,
  INITIATE_ANNOTATION,
  REPLACE_POINT,
  SELECT_POINT,
  REMOVE_SELECTED_POINT,
  REMOVE_ANNOTATION_BY_ID,
  EDIT_ANOTATION_BY_ID,
} from "./actionTypes";
import addPolygonCoordinate from "./actions/addPolygonCoordinate";
import selectPoint from "./actions/selectPoint";
import initiateAnnotation from "./actions/initiateAnnotation";
import replacePoint from "./actions/replacePoint";
import removeSelectedPoint from "./actions/removeSelectedPoint";

const actionSwitch = (state, action) => {
  switch (action.type) {
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
      // Add the annotation to the complete
      // list of annotations
      return {
        ...state,
        showGhostPolygon: false,
        activeAnnotationId: null,
      };
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

    default:
      return state;
  }
};

export default actionSwitch;
