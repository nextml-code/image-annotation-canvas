import getAbsoluteCoordinate from "../core/getAbsoluteCoordinate";
import getRelativeCoordinate from "../core/getRelativeCoordinate";
import {
  EDIT_ANOTATION_BY_ID,
  REMOVE_ANNOTATION_BY_ID,
  SET_ACTIVE_ANNOTATION_ID,
  SET_ANNOTATIONS,
} from "./actionTypes";

const selectAnnotation = (dispatch) => (id) =>
  dispatch({ type: SET_ACTIVE_ANNOTATION_ID, payload: id });

const updateAnnotation = (dispatch) => (annotation) =>
  dispatch({ type: EDIT_ANOTATION_BY_ID, payload: annotation });

const deleteAnnotation = (dispatch) => (id) =>
  dispatch({
    type: REMOVE_ANNOTATION_BY_ID,
    payload: id,
  });

const setAnnotations = (dispatch) => (annotations) =>
  dispatch({ type: SET_ANNOTATIONS, payload: annotations });

const toRelative = (state) => (coordinate) => ({
  ...coordinate,
  ...getRelativeCoordinate(state.canvasDimensions, coordinate),
});

const toAbsolute = (state) => (coordinate) => ({
  ...coordinate,
  ...getAbsoluteCoordinate(state.canvasDimensions)(coordinate),
});

const canvasActions = (state, dispatch) => ({
  annotation: {
    select: selectAnnotation(dispatch),
    update: updateAnnotation(dispatch),
    delete: deleteAnnotation(dispatch),
  },
  annotations: {
    set: setAnnotations(dispatch),
  },
  coordinates: {
    toRelative: toRelative(state),
    toAbsolute: toAbsolute(state),
  },
});

export default canvasActions;
