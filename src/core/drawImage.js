import getContext from "./getContext";
import imageHeight from "./imageHeight";

const drawImage = (canvas, { image }) => {
  if (image instanceof HTMLImageElement) {
    try {
      const ctx = getContext(canvas);
      ctx.drawImage(image, 0, 0, canvas.width, imageHeight(canvas, image));
    } catch (error) {
      // throw new Error(niceError(drawImage, error));
      console.log(error);
    }
  }
};

export default drawImage;
