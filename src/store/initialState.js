import { defaultUIColors, defaultKeyMap } from "../config/defaults";
import { DEFAULT_CURSOR } from "../core/cursorTypes";

export default Object.freeze({
  activeAnnotationId: null, // id of the currently active annotation
  cursor: DEFAULT_CURSOR,
  mouseIsDown: false,
  resizing: false,
  hoveredPoints: [],
  keyMap: defaultKeyMap,
  UIColors: defaultUIColors,
  showGhostPolygon: true,
  image: {},
  canvasDimensions: { width: 0, height: 0 },

  options: {
    displayBoundingBox: true,
  },

  annotations: [], // Array with annotation objects
});
