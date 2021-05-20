import createBoundingBox from "../../core/createBoundingBox";
import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";

const replacePoint = (state, action) => ({
  ...state,
  annotations: modifyActiveAnnotation(state, (activeAnnotation) => {
    const nextCoordinates = activeAnnotation.coordinates.map((coordinate) => {
      if (coordinate.id === action.payload.id) {
        return action.payload;
      }
      return coordinate;
    });
    return {
      ...activeAnnotation,
      coordinates: nextCoordinates,
      bbox: createBoundingBox(nextCoordinates),
    };
  }),
});

export default replacePoint;
