import { defaultUIColors, defaultKeyMap } from "../config/defaults";
import { DEFAULT_CURSOR } from "../core/cursorTypes";

export default Object.freeze({
  activeAnnotationId: null, // id of the currently active annotation
  cursor: DEFAULT_CURSOR,
  annotations: [], // Array with annotation objects
  mouseIsDown: false,
  resizing: false,
  hoveredPoints: [],
  keyMap: defaultKeyMap,
  UIColors: defaultUIColors,
  image: {},
  canvasDimensions: { width: 0, height: 0 },
});
