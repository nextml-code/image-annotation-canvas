export const getUIColor = (state) => {
  const { UIColors } = state;
  const colorIndex =
    (state.annotations.length + UIColors.length) % UIColors.length;
  return UIColors[colorIndex];
};

export default getUIColor;
