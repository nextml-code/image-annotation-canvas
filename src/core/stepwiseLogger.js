import { throwIf } from "./throwIf";

// Debug utility
export const stepwiseLogger = (function () {
  let step = 0;

  return (message, body = {}, throwcondition = false) => {
    const output = `${step}. ${message}`;
    console.log(output);
    console.log(body);
    throwIf(throwcondition || body === undefined, `Failed at step ${step}`);
    step += 1;
  };
})();
