import { useEffect } from "react";
import clearCanvas from "../core/clearCanvas";
import drawImage from "../core/drawImage";
import drawPolygons from "../core/drawPolygons";
import drawGhostPolygon from "../core/drawGhostPolygon";
import drawHoveredPoints from "../core/hoveredPoints/drawHoveredPoints";
import drawSelectedPoint from "../core/drawSelectedPoint";
import { drawCoordinates } from "../core/drawCoordinates";

const useCanvasRenderUpdate = (state, canvas, allowEdit) => {
  const { activeAnotationId, image } = state;

  const redrawCanvas = () => {
    try {
      clearCanvas(canvas);
      drawImage(canvas, state);
      drawPolygons(canvas, state);
      if (state.editCoordinates) drawCoordinates(canvas, state);
      if (state.editCoordinates) drawHoveredPoints(canvas, state);
      if (state.editCoordinates) drawSelectedPoint(canvas, state);

      if (allowEdit) {
        drawGhostPolygon(canvas, state);
      }
    } catch (error) {
      console.error("Failed to redraw canvas:\n");
      console.error(error);
    }
  };

  useEffect(() => {
    if (![canvas, image].includes(null)) {
      redrawCanvas();
    }
  }, [redrawCanvas, image, activeAnotationId]);
};

export default useCanvasRenderUpdate;
