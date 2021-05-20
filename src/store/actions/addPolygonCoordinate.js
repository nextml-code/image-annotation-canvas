import { v4 as uuid } from "uuid";
import createBoundingBox from "../../core/createBoundingBox";
import getActiveAnnotation from "../../core/getActiveAnnotation";
import getRelativeCoordinate from "../../core/getRelativeCoordinate";

const addPolygonCoordinate = (state, action) => {
  const activeAnnotation = getActiveAnnotation(state);
  const newCoordinate = {
    id: uuid(),
    ...getRelativeCoordinate(state.canvasDimensions, action.payload),
  };

  return {
    ...state,
    selectedPoint: newCoordinate.id,
    annotations: [
      ...state.annotations.filter((a) => a.id !== state.activeAnnotationId),
      {
        ...activeAnnotation,
        coordinates: [...activeAnnotation.coordinates, newCoordinate],
        bbox: createBoundingBox([
          ...activeAnnotation.coordinates,
          newCoordinate,
        ]),
      },
    ],
  };
};

export default addPolygonCoordinate;
