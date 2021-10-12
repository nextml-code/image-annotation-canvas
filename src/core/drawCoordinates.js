import drawCoordinatePoint from "./drawCoordinatePoint";
import { getAllCoordinates } from "./getAllCoordinates";

export const drawCoordinates = (canvas, state) => {
  getAllCoordinates(state).forEach(drawCoordinatePoint(canvas, state));
};
