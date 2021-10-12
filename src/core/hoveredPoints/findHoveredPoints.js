import getAbsoluteCoordinate from "../getAbsoluteCoordinate";
import { getAllCoordinates } from "../getAllCoordinates";
import getRelativeCoordinate from "../getRelativeCoordinate";
import insidePoint from "../insidePoint";

const toAbsolute = (state) => (coordinate) => ({
  ...coordinate,
  ...getAbsoluteCoordinate(state.canvasDimensions)(coordinate),
});

const toRelative = (state) => (coordinate) => ({
  ...coordinate,
  ...getRelativeCoordinate(state.canvasDimensions, coordinate),
});

const findHoveredPoints = (state, mousePosition) =>
  getAllCoordinates(state)
    .map(toAbsolute(state))
    .filter(insidePoint(mousePosition))
    .map(toRelative(state));

export default findHoveredPoints;
