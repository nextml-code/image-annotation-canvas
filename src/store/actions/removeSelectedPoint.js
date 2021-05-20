import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";
import getActiveAnnotation from "../../core/getActiveAnnotation";

const getNextSelectedPoint = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  if (activeAnnotation === undefined) {
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

const removeSelectedPoint = (state) => ({
  ...state,
  selectedPoint: getNextSelectedPoint(state),
  annotations: modifyActiveAnnotation(state, (activeAnnotation) => ({
    ...activeAnnotation,
    coordinates: activeAnnotation.coordinates.filter(
      (point) => point.id !== state.selectedPoint,
    ),
  })),
});

export default removeSelectedPoint;
