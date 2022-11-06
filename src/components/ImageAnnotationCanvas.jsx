import React, { useEffect } from "react";
import PropTypes from "prop-types";
import isDefined from "@codewell/is-defined";
import CanvasView from "./CanvasView";
import CanvasContext from "../store/CanvasContext";
import { FINISH_POLYGON, INITIATE_CONFIG } from "../store/actionTypes";

const ImageAnnotationCanvas = ({
  imageSource,
  state,
  dispatch,
  allowEdit,
  completeAnnotationOn,
  config,
  eventCallback,
}) => {
  useEffect(() => {
    if (completeAnnotationOn(state)) {
      dispatch({ type: FINISH_POLYGON });
    }
  }, [state]);

  useEffect(() => {
    dispatch({ type: INITIATE_CONFIG, payload: config });
  }, []);

  return (
    <CanvasContext.Provider value={{ state, dispatch }}>
      <CanvasView
        imageSource={imageSource}
        allowEdit={allowEdit}
        eventCallback={eventCallback}
      />
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
