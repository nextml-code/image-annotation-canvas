const { reducer, initialState, actions } = require("../lib/index.js");
const ImageAnnotationCanvas = require("../lib/index.js").default;

test("Component", () => {
  expect(typeof ImageAnnotationCanvas).toBe("function");
});

test("Reducer", () => {
  expect(typeof reducer).toBe("function");
});

test("Initial state", () => {
  expect(typeof initialState).toBe("object");
});

test("Actions", () => {
  expect(typeof actions).toBe("function");
});
