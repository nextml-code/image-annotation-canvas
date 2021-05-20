import partialAutomaticActionSwitch from "@codewell/automatic-action-switch";
import stateLogger from "@codewell/state-logger";
import actionSwitch from "./actionSwitch";
import {
  COMBINE,
  EDIT_ANOTATION_BY_ID,
  FINISH_POLYGON,
  INITIATE_ANNOTATION,
  SET_ACTIVE_ANNOTATION_ID,
  SET_ANNOTATIONS,
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
  (...actions) =>
  (...args) => {
    if (!["DEBUG", "INFORMATIONAL"].includes(loglevel)) {
      return;
    }

    if (loglevel === "INFORMATIONAL") {
      const [, action] = args;
      return console.log(action.type, "::", action.payload);
    }

    if (
      args[1].type === COMBINE &&
      args[1].payload.map((a) => a.type).filter((a) => actions.includes(a))
        .length > 0
    ) {
      return stateLogger(...args);
    }

    if (actions.includes(args[1].type)) {
      return stateLogger(...args);
    }
  };

const reducer = (loglevel) => (state, action) => {
  const logState = logger(loglevel)(
    FINISH_POLYGON,
    SET_ACTIVE_ANNOTATION_ID,
    SET_ANNOTATIONS,
    INITIATE_ANNOTATION,
    EDIT_ANOTATION_BY_ID,
  );

  if (action.type === COMBINE) {
    const combinedState = action.payload.reduce(automaticActionSwitch, state);
    logState(state, action, combinedState);
    return combinedState;
  }

  const nextState = automaticActionSwitch(state, action);

  logState(state, action, nextState);

  return nextState;
};

export default reducer;
