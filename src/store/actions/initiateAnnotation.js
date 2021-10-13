const initiateAnnotation = (state, action) => ({
  ...state,
  annotations: [...state.annotations, action.payload],
  activeAnnotationId: action.payload.id,
});

export default initiateAnnotation;
