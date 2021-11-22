export const getUIColor = (state) => {
  const {
    config: { colors },
  } = state;
  const colorIndex = (state.annotations.length + colors.length) % colors.length;
  return colors[colorIndex];
};

export default getUIColor;
