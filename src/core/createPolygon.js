import { v4 as uuid } from "uuid";

const createPolygon = ({ type = undefined }) => ({
  id: uuid(),
  coordinates: [],
  visible: true,
  type,
});

export default createPolygon;
