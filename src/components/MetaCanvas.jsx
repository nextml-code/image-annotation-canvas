import React, { useState } from "react";
import useCanvas from "../hooks/useCanvas";
import onCanvasInit from "../core/onCanvasInit";
import useDynamicCanvasDimensions from "../hooks/useDynamicCanvasDimensions";

// Use the MetaCanvas to measure
// rendering dimensions
const MetaCanvas = () => {
  const [canvas, setCanvas] = useState(null);
  const { canvasRef } = useCanvas(onCanvasInit(setCanvas));
  useDynamicCanvasDimensions(canvas);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: -1000,
      }}
    />
  );
};

MetaCanvas.propTypes = {};

export default MetaCanvas;
