const getUIColor = (state, index) => {
  const { UIColors } = state;
  const colorIndex = (index + UIColors.length) % UIColors.length;
  return UIColors[colorIndex];
};

export default getUIColor;
