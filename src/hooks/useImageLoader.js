import loadImage from "@codewell/load-image";
import { useContext, useEffect } from "react";
import { SET_IMAGE } from "../store/actionTypes";
import CanvasContext from "../store/CanvasContext";

const useImageLoader = (imageSource) => {
  const { dispatch } = useContext(CanvasContext);
  useEffect(() => {
    loadImage(imageSource).then((image) => {
      dispatch({
        type: SET_IMAGE,
        payload: image,
      });
    });
  }, [imageSource]);
};

export default useImageLoader;
