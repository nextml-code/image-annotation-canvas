const getActiveAnnotation = ({ annotations, activeAnnotationId }) => {
  const [activeAnnotation] = annotations.filter(
    (a) => a.id === activeAnnotationId,
  );
  return activeAnnotation;
};

export default getActiveAnnotation;
