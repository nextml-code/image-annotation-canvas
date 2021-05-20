import getAbsoluteCoordinate from "./getAbsoluteCoordinate";
import getRelativeCoordinate from "./getRelativeCoordinate";
import getActiveAnnotation from "./getActiveAnnotation";
import prepareInsidePoint from "./insidePoint";

const toAbsolute = (state) => (coordinate) => ({
  ...coordinate,
  ...getAbsoluteCoordinate(state.canvasDimensions)(coordinate),
});

const toRelative = (state) => (coordinate) => ({
  ...coordinate,
  ...getRelativeCoordinate(state.canvasDimensions, coordinate),
});

const findHoveredPoints = (state, mousePosition) => {
  const { coordinates } = getActiveAnnotation(state);
  const insidePoint = prepareInsidePoint(mousePosition);
  return coordinates
    .map(toAbsolute(state))
    .filter(insidePoint)
    .map(toRelative(state));
};

export default findHoveredPoints;
