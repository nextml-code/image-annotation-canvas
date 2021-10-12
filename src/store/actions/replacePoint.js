import createBoundingBox from "../../core/createBoundingBox";

const nextCoordinates = (action, coordinates) =>
  coordinates.map((coordinate) => {
    if (coordinate.id === action.payload.id) {
      return action.payload;
    }

    return coordinate;
  });

const replacePoint = (state, action) => {
  return {
    ...state,
    annotations: state.annotations.reduce((annotations, nextAnnotation) => {
      return [
        ...annotations,
        {
          ...nextAnnotation,
          coordinates: nextCoordinates(action, nextAnnotation.coordinates),
          bbox: createBoundingBox(
            nextCoordinates(action, nextAnnotation.coordinates),
          ),
        },
      ];
    }, []),
  };
};

export default replacePoint;
