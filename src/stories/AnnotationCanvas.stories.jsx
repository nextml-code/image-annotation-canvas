import last from "@codewell/last";
import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import Canvas, { initialState, reducer, actions } from "..";
import { exampleurl } from "./mockdata.js";

const annotations = [];

export default {
  title: "Annotation Canvas",
  component: Canvas,
};

const boundingBoxToPloygon = ({ x, y, width, height }) => [
  { x, y, id: uuid() },
  { x: x + width, y, id: uuid() },
  { x: x + width, y: y + height, id: uuid() },
  { x, y: y + height, id: uuid() },
];

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = () => {
  const [state, dispatch] = useReducer(reducer("DEBUG"), {
    ...initialState,
    options: { displayBoundingBox: true },
  });

  const canvasActions = actions(state, dispatch);

  // useEffect(() => {
  //   canvasActions.annotations.set(
  //     annotations.map((a) => ({
  //       ...a,
  //       id: uuid(),
  //       coordinates: boundingBoxToPloygon(a.bbox).map(
  //         canvasActions.coordinates.toRelative,
  //       ),
  //       visible: true,
  //     })),
  //   );
  // }, [state.canvasDimensions]);

  return (
    <div>
      <Canvas imageSource={exampleurl} state={state} dispatch={dispatch} />
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
