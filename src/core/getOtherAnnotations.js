const getOtherAnnotations = (state) =>
  state.annotations.filter((a) => a.id !== state.activeAnnotationId);

export default getOtherAnnotations;
