const initiateAnnotation = (state, action) => ({
  ...state,
  annotations: [...state.annotations, action.payload],
  activeAnnotationId: action.payload.id,
  showGhostPolygon: true,
});

export default initiateAnnotation;
