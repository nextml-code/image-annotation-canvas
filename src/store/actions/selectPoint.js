import reorderArray from "@codewell/reorder-array";
import getActiveAnnotation from "../../core/getActiveAnnotation";
import modifyActiveAnnotation from "../../core/modifyActiveAnnotation";
import getPointIndex from "../../core/getPointIndex";

const getSelectedPointId = (payload) => {
  switch (typeof payload) {
    case "string": {
      // If the payload is a string
      // assume we got the id of the point
      return payload;
    }

    case "object": {
      // If the payload is an object
      // assume that the point object is passed
      // and retreive the id from the object
      return payload.id;
    }

    default: {
      return undefined;
    }
  }
};

const selectPoint = (state, action) => {
  const { payload } = action;

  if (payload === undefined) {
    return {
      ...state,
      selectedPoint: null,
    };
  }

  const { coordinates } = getActiveAnnotation(state);

  // Reorder the coordinnates so that the
  // selected point is the last one in the
  // array of coordinates
  const reorderedCoordinates = reorderArray(
    coordinates,
    getPointIndex(coordinates, payload), // Index of selected point
    coordinates.length - 1,
  );

  const selectedPointId = getSelectedPointId(payload);
  return {
    ...state,
    selectedPoint: selectedPointId,
    annotations: modifyActiveAnnotation(state, (activeAnnotation) => ({
      ...activeAnnotation,
      coordinates: reorderedCoordinates,
    })),
  };
};

export default selectPoint;
