import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";

const replacePoint = (state, action) => ({
  ...state,
  annotations: modifyActiveAnnotation(state, (activeAnnotation) => ({
    ...activeAnnotation,
    coordinates: activeAnnotation.coordinates.map((coordinate) => {
      if (coordinate.id === action.payload.id) {
        return action.payload;
      }
      return coordinate;
    }),
  })),
});

export default replacePoint;
