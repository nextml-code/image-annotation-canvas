import isDefined from "@codewell/is-defined";
import prepareDrawCoordinatePoint from "./drawCoordinatePoint";
import getActiveAnnotation from "./getActiveAnnotation";

// Deprecated
const drawActiveAnnotationCoordinates = (canvas, state) => {
  const activeAnnotation = getActiveAnnotation(state);
  const drawCoordinatePoint = prepareDrawCoordinatePoint(canvas, state);

  if (isDefined(activeAnnotation)) {
    return activeAnnotation.coordinates.forEach(drawCoordinatePoint);
  }

  return null;
};

export default drawActiveAnnotationCoordinates;
