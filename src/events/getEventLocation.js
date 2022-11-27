const getEventLocation = (event) => {
  if (event.touches && event.touches.length == 1) {
    return { x: event.touches[0].clientX, y: event.touches[0].clientY };
  } else if (event.clientX && event.clientY) {
    return { x: event.clientX, y: event.clientY };
  }
};

export default getEventLocation;
