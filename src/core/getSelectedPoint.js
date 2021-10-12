import retrieveFromArray from "@codewell/retrieve-from-array";
import { getAllCoordinates } from "./getAllCoordinates";

const getSelectedPoint = (state) => {
  const coordinates = getAllCoordinates(state);

  const [selectedPoint] = retrieveFromArray(coordinates, {
    id: state.selectedPoint,
  });

  return selectedPoint;
};

export default getSelectedPoint;
