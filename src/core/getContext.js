const getContext = (canvas) => {
  try {
    return canvas.getContext("2d");
  } catch (error) {
    console.log(error);
  }
};

export default getContext;
