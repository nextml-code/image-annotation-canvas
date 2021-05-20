import getActiveAnnotation from "./getActiveAnnotation";
import getOtherAnnotations from "./getOtherAnnotations";

const modifyActiveAnnotation = (state, callback) => {
  const otherAnnotations = getOtherAnnotations(state);
  const activeAnnotation = getActiveAnnotation(state);
  return [...otherAnnotations, callback(activeAnnotation)];
};

export default modifyActiveAnnotation;
