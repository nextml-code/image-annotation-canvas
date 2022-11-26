// import loadImage from "@codewell/load-image";
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

const loadImage = (imageUrl) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      const loadError = new Error(
        `Failed to load image: \n${imageUrl} \nDo you have a typo in you image url?`,
      );
      reject(loadError);
    };
    image.src = imageUrl;
  });

export default useImageLoader;
