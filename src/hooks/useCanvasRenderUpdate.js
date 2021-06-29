import { useEffect } from "react";
import clearCanvas from "../core/clearCanvas";
import drawImage from "../core/drawImage";
import drawPolygons from "../core/drawPolygons";
import drawActiveAnnotationCoordinates from "../core/drawActiveAnnotationCoordinates";
import drawGhostPolygon from "../core/drawGhostPolygon";
import drawHoveredPoints from "../core/drawHoveredPoints";
import drawSelectedPoint from "../core/drawSelectedPoint";

const useCanvasRenderUpdate = (state, canvas, allowEdit) => {
  const { activeAnotationId, image } = state;

  const redrawCanvas = () => {
    try {
      clearCanvas(canvas);
      drawImage(canvas, state);
      drawPolygons(canvas, state);
      drawActiveAnnotationCoordinates(canvas, state);
      drawHoveredPoints(canvas, state);
      drawSelectedPoint(canvas, state);

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
