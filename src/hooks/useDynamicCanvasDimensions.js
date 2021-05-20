import { useContext, useLayoutEffect } from "react";
import isDefined from "@codewell/is-defined";
import isEmpty from "@codewell/is-empty";
import CanvasContext from "../store/CanvasContext";
import imageHeight from "../core/imageHeight";
import { SET_CANVAS_DIMENSIONS } from "../store/actionTypes";

const useDynamicCanvasDimensions = (canvas) => {
  const {
    state: { image },
    dispatch,
  } = useContext(CanvasContext);

  useLayoutEffect(() => {
    if (isDefined(canvas) && !isEmpty(image)) {
      dispatch({
        type: SET_CANVAS_DIMENSIONS,
        payload: {
          width: canvas.offsetWidth,
          height: imageHeight(canvas, image),
        },
      });
    }
  }, [canvas, image]);
};

export default useDynamicCanvasDimensions;
