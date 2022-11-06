import { v4 as uuid } from "uuid";
import getUIColor from "./getUIColor.js";

const createPolygon = (state) => ({
  id: uuid(),
  coordinates: [],
  visible: true,
  color: getUIColor(state),
  showTextBoxes: state?.config?.showTextBoxes,
  opacity: state?.config?.defaultOpacity
    ? state?.config?.defaultOpacity
    : 0.135,
});

export default createPolygon;
