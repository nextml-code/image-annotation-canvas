import { v4 as uuid } from "uuid";

const createPolygon = () => ({
  id: uuid(),
  coordinates: [],
  visible: true,
});

export default createPolygon;
