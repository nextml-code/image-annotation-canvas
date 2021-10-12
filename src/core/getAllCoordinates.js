export const getAllCoordinates = (state) => {
  return state.annotations.reduce((coordinates, nextAnnotation) => {
    return [...coordinates, ...nextAnnotation.coordinates];
  }, []);
};
