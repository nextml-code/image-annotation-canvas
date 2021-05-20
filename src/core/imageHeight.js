/**
 * Calculate image height based on ratio
 *
 *  image width        canvas width
 * -------------- = -------------------- =>
 *  image height     image print height
 *
 *  canvas width * image height
 * ----------------------------- =  image print height
 *        image width
 */
const imageHeight = (canvas, image) =>
  Math.floor(canvas.offsetWidth * (image.height / image.width));

export default imageHeight;
