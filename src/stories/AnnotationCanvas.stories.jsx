import last from "@codewell/last";
import React, { useReducer } from "react";
import Canvas, { initialState, reducer, actions } from "..";
import { exampleurl } from "./mockdata.js";

export default {
  title: "Annotation Canvas",
  component: Canvas,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => {
  const [state, dispatch] = useReducer(reducer("DEBUG"), {
    ...initialState,
  });

  const canvasActions = actions(state, dispatch);

  return (
    <div>
      <Canvas
        imageSource={exampleurl}
        state={state}
        dispatch={dispatch}
        completeAnnotationOn={(canvasState) => {
          // return (
          //   canvasState.annotations.filter(
          //     (annotation) => canvasState.activeAnnotationId === annotation.id,
          //   )[0]?.coordinates?.length > 1
          // );
          return false;
        }}
        primaryOutline="bounding-box"
        config={{
          bbox: {
            display: false,
            lineDash: [],
            lineWidth: 3,
          },
          polygon: {
            display: true,
            lineDash: [],
            lineWidth: 3,
          },
        }}
      />
      <button
        type="button"
        onClick={() => {
          canvasActions.annotation.select(state.annotations[0].id);
        }}
      >
        Select first annotation
      </button>
      <button
        type="button"
        onClick={() => {
          canvasActions.annotation.delete(last(state.annotations).id);
        }}
      >
        Remove last annotation
      </button>
      <button
        type="button"
        onClick={() => {
          canvasActions.annotation.update({
            id: state.annotations[0].id,
          });
        }}
      >
        Edit annotation
      </button>
    </div>
  );
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
