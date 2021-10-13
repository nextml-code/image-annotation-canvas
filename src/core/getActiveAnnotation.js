const getActiveAnnotation = ({ annotations, activeAnnotationId }) => {
  const [activeAnnotation] = annotations.filter(
    (annotation) => annotation.id === activeAnnotationId,
  );
  return activeAnnotation;
};

export default getActiveAnnotation;
