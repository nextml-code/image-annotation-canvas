import { useState, useCallback } from "react";

const useCanvas = (onInit) => {
  const [rendered, setRendered] = useState(false);

  const canvasRef = useCallback(
    (node) => {
      if (node !== null) {
        if (!rendered) {
          setRendered(true);
          onInit(node);
        }
      }
    },
    [rendered, onInit],
  );

  return { canvasRef };
};

export default useCanvas;
