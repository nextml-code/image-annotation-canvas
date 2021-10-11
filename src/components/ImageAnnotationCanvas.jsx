import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CanvasView from "./CanvasView";
import CanvasContext from "../store/CanvasContext";
import { FINISH_POLYGON } from "../store/actionTypes";

const ImageAnnotationCanvas = ({
  imageSource,
  state,
  dispatch,
  allowEdit,
  completeAnnotationOn,
  config,
}) => {
  useEffect(() => {
    if (completeAnnotationOn(state)) {
      dispatch({ type: FINISH_POLYGON });
    }
  }, [state]);

  return (
    <CanvasContext.Provider value={{ state: { ...state, config }, dispatch }}>
      <CanvasView imageSource={imageSource} allowEdit={allowEdit} />
    </CanvasContext.Provider>
  );
};

ImageAnnotationCanvas.propTypes = {
  imageSource: PropTypes.string.isRequired,
  state: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool,
  completeAnnotationOn: PropTypes.func,
  config: PropTypes.shape(),
};

ImageAnnotationCanvas.defaultProps = {
  allowEdit: true,
  completeAnnotationOn: () => false,
  config: {},
};

export default ImageAnnotationCanvas;
