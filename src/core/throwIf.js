// Debuging tool
export const throwIf = (condition, message = "") => {
  if (condition) {
    throw new Error(message);
  }
};
