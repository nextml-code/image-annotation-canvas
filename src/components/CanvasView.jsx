import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Canvas from "./Canvas";
import eventHandler from "../events/handler.js";
import useCanvasRenderUpdate from "../hooks/useCanvasRenderUpdate";
import CanvasContext from "../store/CanvasContext";
import MetaCanvas from "./MetaCanvas";
import onCanvasInit from "../core/onCanvasInit";
import useImageLoader from "../hooks/useImageLoader";
import getContext from "../core/getContext";

const CanvasView = ({ imageSource, allowEdit, eventCallback }) => {
  const { state, dispatch } = useContext(CanvasContext);
  const [canvas, setCanvas] = useState(null);
  useCanvasRenderUpdate(state, canvas, allowEdit);
  useImageLoader(imageSource);

  // useEffect(() => {
  //   const ctx = getContext(canvas);
  //   if (canvas !== undefined && ctx !== undefined) {
  //     ctx.translate(
  //       state.canvasDimensions.width / 2,
  //       state.canvasDimensions.height / 2,
  //     );
  //   }
  // }, [canvas, state.canvasDimensions]);

  useEffect(() => {
    const ctx = getContext(canvas);
    if (canvas !== undefined && ctx !== undefined) {
      // ctx.translate(
      //   state.canvasDimensions.width / 2,
      //   state.canvasDimensions.height / 2,
      // );
      // ctx.scale(state.canvasZoom, state.canvasZoom);
      ctx.setTransform(state.canvasZoom, 0, 0, state.canvasZoom, 0, 0);
    }
  }, [canvas, state.canvasZoom]);

  return (
    <>
      <MetaCanvas />
      <Canvas
        onInit={onCanvasInit(setCanvas)}
        onEvent={eventHandler(state, dispatch, allowEdit, eventCallback)}
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
