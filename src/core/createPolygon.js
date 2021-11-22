import { v4 as uuid } from "uuid";
import getUIColor from "./getUIColor.js";

const createPolygon = (state) => ({
  id: uuid(),
  coordinates: [],
  visible: true,
  color: getUIColor(state),
});

export default createPolygon;
