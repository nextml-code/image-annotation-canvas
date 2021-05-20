// Initialize the canvas
const onCanvasInit = (setCanvas) => async (canvas) => {
  try {
    // Set the canvas to make it available to the rendering function
    setCanvas(canvas);
  } catch (error) {
    console.error(
      new Error(`
      Failed to initialize canvas. 
      Reason:
      ${error.message}
      `),
    );
  }
};

export default onCanvasInit;
