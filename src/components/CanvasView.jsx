import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Canvas from "./Canvas";
import eventHandler from "../events/handler.js";
import useCanvasRenderUpdate from "../hooks/useCanvasRenderUpdate";
import CanvasContext from "../store/CanvasContext";
import MetaCanvas from "./MetaCanvas";
import onCanvasInit from "../core/onCanvasInit";
import useImageLoader from "../hooks/useImageLoader";

const CanvasView = ({ imageSource, allowEdit }) => {
  const { state, dispatch } = useContext(CanvasContext);
  const [canvas, setCanvas] = useState(null);
  useCanvasRenderUpdate(state, canvas, allowEdit);
  useImageLoader(imageSource);

  return (
    <>
      <MetaCanvas />
      <Canvas
        onInit={onCanvasInit(setCanvas)}
        onEvent={eventHandler(state, dispatch, allowEdit)}
        cursor={state.cursor}
        dimensions={state.canvasDimensions}
      />
    </>
  );
};

CanvasView.propTypes = {
  imageSource: PropTypes.string.isRequired,
  allowEdit: PropTypes.bool.isRequired,
};

export default CanvasView;
