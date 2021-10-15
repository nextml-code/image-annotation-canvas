# Image Annotation Canvas

**NOTE! v0.x.x-beta. Not production ready. Still needs testing and improvements.**

React canvas component for image annotation.

## Installation

```
npm install @aiwizo/image-annotation-canvas
```

## Basic usage

```JSX
import { useReducer } from 'react';
import ImageAnnotationCanvas, { reducer, initialState, actions } from '@aiwizo/image-annotation-canvas';

const [state, dispatch] = useReducer(reducer(initialState));

const canvasActions = actions(state,dispatch)

canvasActions.annotations.set([{coordinates: [{x: 0.1, y: 0.15}]}])

<ImageAnnotationCanvas
  imageSource="/some/url"
  state={state}
  dispatch={dispatch}
  completeAnnotationOn={(state) => { /* return a bool calculated from the state */ }}
  config={{
    minCoordinates: 3, // polygons have a minimum of 3 coordinates
    bbox: {
      display: true,
      lineDash: [], // html canvas line dash
      lineWidth: 3, // html canvas line width
    },
    polygon: {
      display: false,
      lineDash: [10], // html canvas line dash
      lineWidth: 10, // html canvas line width
    },
  }}
/>
```

### Annotations

```javascript
{
  // uuid
  id: '7772FF32-052F-4255-9210-E29C99AC3BA6',

  // Ordered array of coordinates {x,y}
  // Where x and y should be the relative
  // coordinates 0 < x, y < 1 of the image dimensions
  coordinates: [
    { x: 0.1, y: 0.3 },
    { x: 0.2, y: 0.35 },
  ];

  // Determines if the annotation should
  // be shown on the canvas
  // ture | false
  visible: true,
}
```

### Coordinates

```javascript
const coordinate = {
  // Relative x, between 0 and 1
  x: 0.2,
  // Relative y, between 0 and 1
  y: 0.3,
  // Some uuid
  id: "2DDA14BD-5394-4315-BC09-1AF2F64F88E3",
};
```

### Canvas Actions

```javascript
// Set the list of annotations in the
// canvas state
actions.annotations.set([
  {
    /* Annotation */
  },
]);
```

```javascript
// Edit single annotation
actions.annotation.update({
  // Required for the update to work
  id,
  ...otherFields,
});
```

```javascript
// Select one annotation for editing
actions.annotation.select(id);
```

```javascript
// Delete one annotation
actions.annotation.delete(id);
```

## Development

Run

```
npm run start
```

from root folder to start the storybook interface with the canvas component.

## Storybook issues

Its not possible to run

```
npm install
```

from scratch due to some issue with storybook and React 17.
A workaround is

```
npx sb@latest upgrade && npm i
```

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
