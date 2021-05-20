import getContext from "./getContext";

const clearCanvas = (canvas) => {
  try {
    const { width, height } = canvas;
    const context = getContext(canvas);
    context.clearRect(0, 0, width, height);
  } catch (error) {
    console.log(error);
  }
};

export default clearCanvas;
