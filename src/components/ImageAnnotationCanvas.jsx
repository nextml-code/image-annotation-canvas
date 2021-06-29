import React from "react";
import PropTypes from "prop-types";
import CanvasView from "./CanvasView";
import CanvasContext from "../store/CanvasContext";

const ImageAnnotationCanvas = ({ imageSource, state, dispatch, allowEdit }) => {
  return (
    <CanvasContext.Provider value={{ state, dispatch }}>
      <CanvasView imageSource={imageSource} allowEdit={allowEdit} />
    </CanvasContext.Provider>
  );
};

ImageAnnotationCanvas.propTypes = {
  imageSource: PropTypes.string.isRequired,
  state: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool,
};

ImageAnnotationCanvas.defaultProps = {
  allowEdit: true,
};

export default ImageAnnotationCanvas;
