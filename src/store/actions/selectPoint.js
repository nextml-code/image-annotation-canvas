import reorderArray from "@codewell/reorder-array";
import isDefined from "@codewell/is-defined";
import getActiveAnnotation from "../../core/getActiveAnnotation";
import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";
import getCoordinateIndex from "../../core/getCoordinateIndex";

const getCoordinateParentAnnotation = (state, coordinateId) =>
  state.annotations.filter(
    (annotation) =>
      annotation.coordinates.filter(
        (coordinate) => coordinate.id === coordinateId,
      ).length > 0,
  )[0];

const selectPoint = (state, action) => {
  const { payload } = action;

  if (!isDefined(payload)) {
    return {
      ...state,
      selectedPoint: null,
      activeAnnotationId: null,
    };
  }

  const annotation = getCoordinateParentAnnotation(state, payload.id);

  const { coordinates } = getActiveAnnotation({
    ...state,
    activeAnnotationId: annotation.id,
  });

  // Reorder the coordinnates so that the
  // selected point is the last one in the
  // array of coordinates
  const reorderedCoordinates = reorderArray(
    coordinates,
    getCoordinateIndex(coordinates, payload), // Index of selected point
    coordinates.length - 1,
  );

  const selectedPoint = payload.id;
  const activeAnnotationId = annotation.id;

  return {
    ...state,
    selectedPoint,
    activeAnnotationId,
    annotations: modifyActiveAnnotation(
      { ...state, activeAnnotationId },
      (activeAnnotation) => ({
        ...activeAnnotation,
        coordinates: reorderedCoordinates,
      }),
    ),
  };
};

export default selectPoint;
