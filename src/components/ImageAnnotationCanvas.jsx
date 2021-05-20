import React from "react";
import PropTypes from "prop-types";
import CanvasView from "./CanvasView";
import CanvasContext from "../store/CanvasContext";

const ImageAnnotationCanvas = ({ imageSource, state, dispatch }) => {
  return (
    <CanvasContext.Provider value={{ state, dispatch }}>
      <CanvasView imageSource={imageSource} />
    </CanvasContext.Provider>
  );
};

ImageAnnotationCanvas.propTypes = {
  imageSource: PropTypes.string.isRequired,
  state: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ImageAnnotationCanvas;
