import { SET_INITIAL_PINCH_DISTANCE } from "../store/actionTypes";
import adjustZoom from "./adjustZoom";

const handlePinch = (state, dispatch, event) => {
  event.preventDefault();

  const touch1 = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  const touch2 = { x: event.touches[1].clientX, y: event.touches[1].clientY };

  // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
  const currentDistance =
    (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2;

  if (state.initialPinchDistance == null) {
    dispatch({ type: SET_INITIAL_PINCH_DISTANCE, payload: currentDistance });
  } else {
    adjustZoom(null, currentDistance / state.initialPinchDistance);
  }
};

export default handlePinch;
