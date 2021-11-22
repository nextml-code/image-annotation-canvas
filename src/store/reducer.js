import partialAutomaticActionSwitch from "@codewell/automatic-action-switch";
import stateLogger from "@codewell/state-logger";
import actionSwitch from "./actionSwitch";
import {
  COMBINE,
  EDIT_ANOTATION_BY_ID,
  FINISH_POLYGON,
  INITIATE_ANNOTATION,
  INITIATE_CONFIG,
  SET_ACTIVE_ANNOTATION_ID,
  SET_ANNOTATIONS,
  SET_EDIT_COORDINATES,
  SET_HOVERED_POINTS,
} from "./actionTypes";

const actionSwitchConfig = {
  prefix: {
    set: "SET",
    update: "UPDATE",
    remove: "DELETE",
  },
};

const automaticActionSwitch = partialAutomaticActionSwitch(
  actionSwitch,
  actionSwitchConfig,
);

const logger =
  (loglevel) =>
  (...args) => {
    const [, action] = args;

    if (loglevel.split(",").includes(action.type)) {
      return stateLogger(...args);
    }
  };

// Remove annotations that have no coordinates
const cleanup = (state) => ({
  ...state,
  annotations: state.annotations.filter(
    ({ coordinates }) => coordinates.length > 0,
  ),
  // If the active annotation is removed due to no coordinates left
  // make sure to unset it as sctive.
  activeAnnotationId: !state.annotations
    .filter(({ coordinates }) => coordinates.length > 0)
    .map((a) => a.id)
    .includes(state.activeAnnotationId)
    ? null
    : state.activeAnnotationId,
});

const reducer = (loglevel) => (state, action) => {
  const logState = logger(loglevel);

  if (action.type === COMBINE) {
    const combinedState = action.payload.reduce(automaticActionSwitch, state);
    logState(state, action, combinedState);
    return cleanup(combinedState);
  }

  const nextState = automaticActionSwitch(state, action);
  logState(state, action, nextState);

  return cleanup(nextState);
};

export default reducer;
