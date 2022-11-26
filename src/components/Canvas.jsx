import React from "react";
import PropTypes from "prop-types";
import useCanvas from "../hooks/useCanvas";

const Canvas = ({ cursor, onInit, onEvent, dimensions }) => {
  const { canvasRef } = useCanvas(onInit);
  const { width, height } = dimensions;

  return (
    <canvas
      ref={canvasRef}
      style={{ cursor }}
      tabIndex={0}
      onMouseDown={onEvent}
      onMouseMove={onEvent}
      onMouseUp={onEvent}
      onDoubleClick={onEvent}
      onKeyUp={onEvent}
      onKeyDown={onEvent}
      onWheel={onEvent}
      width={width}
      height={height}
    />
  );
};

Canvas.propTypes = {
  cursor: PropTypes.string.isRequired,
  onInit: PropTypes.func.isRequired,
  onEvent: PropTypes.func.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default Canvas;
