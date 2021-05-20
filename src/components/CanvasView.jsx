import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Canvas from "./Canvas";
import canvasEngine from "../core/canvasEngine";
import useCanvasRenderUpdate from "../hooks/useCanvasRenderUpdate";
import CanvasContext from "../store/CanvasContext";
import MetaCanvas from "./MetaCanvas";
import onCanvasInit from "../core/onCanvasInit";
import useImageLoader from "../hooks/useImageLoader";

const CanvasView = ({ imageSource }) => {
  const { state, dispatch } = useContext(CanvasContext);
  const [canvas, setCanvas] = useState(null);
  useCanvasRenderUpdate(state, canvas);
  useImageLoader(imageSource);

  return (
    <>
      <MetaCanvas />
      <Canvas
        onInit={onCanvasInit(setCanvas)}
        onEvent={canvasEngine(state, dispatch)}
        cursor={state.cursor}
        dimensions={state.canvasDimensions}
      />
    </>
  );
};

CanvasView.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default CanvasView;
