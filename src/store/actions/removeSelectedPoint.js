import isDefined from "@codewell/is-defined";
import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";
import getActiveAnnotation from "../../core/getActiveAnnotation";
import createBoundingBox from "../../core/createBoundingBox";

const getNextSelectedPoint = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  if (!isDefined(activeAnnotation)) {
    return null;
  }
  const { coordinates } = activeAnnotation;

  if (coordinates.length === 0) {
    return null;
  }

  if (coordinates.length === 1) {
    return coordinates[0].id;
  }

  return coordinates[coordinates.length - 2].id;
};

const removeSelectedPoint = (state) => {
  if (isDefined(getActiveAnnotation(state))) {
    return {
      ...state,
      selectedPoint: getNextSelectedPoint(state),
      annotations: modifyActiveAnnotation(state, (activeAnnotation) => {
        const nextCoordinates = activeAnnotation.coordinates.filter(
          (coordinate) => coordinate.id !== state.selectedPoint,
        );
        return {
          ...activeAnnotation,
          coordinates: nextCoordinates,
          bbox: createBoundingBox(nextCoordinates),
        };
      }),
    };
  }

  return state;
};

export default removeSelectedPoint;
