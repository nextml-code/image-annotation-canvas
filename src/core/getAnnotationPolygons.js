const arrayReducer = (accumulator, value) => [...accumulator, ...value];

const getAnnotationPolygons = (annotations, selectedClass = "all") =>
  annotations
    .map((annotation) => {
      if (selectedClass === "all" || annotation.class === "") {
        return annotation.objects.map((obj) => obj.polygons);
      }
    })
    .reduce(arrayReducer, []) // Flatten the array
    .reduce(arrayReducer, []);

export default getAnnotationPolygons;
