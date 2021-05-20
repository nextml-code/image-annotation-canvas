import retrieveFromArray from "@codewell/retrieve-from-array";
import getActiveAnnotation from "./getActiveAnnotation";

const getSelectedPoint = (state) => {
  const activeAnnotation = getActiveAnnotation(state);

  if (activeAnnotation === undefined) {
    return;
  }

  const [selectedPoint] = retrieveFromArray(activeAnnotation.coordinates, {
    id: state.selectedPoint,
  });

  return selectedPoint;
};

export default getSelectedPoint;
