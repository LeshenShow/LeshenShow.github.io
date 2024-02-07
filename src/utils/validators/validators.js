export const validators = {
  required(value) {
    if (value) return undefined;
    return "error message";
  },
  maxLength15(value) {
    if (value && value.length > 15) return "Max length is 15 symbols";
    return undefined;
  },
  minLength2(value) {
    if (value && value.length < 2) return "Min length is 2 symbols";
    return undefined;
  },
  //   maxLengthCreator: (maxLength) => (value) => {
  //     if (value && value.length > maxLength)
  //       return `Max length is ${maxLength} symbols`;
  //     return undefined;
  //   },
  //   minLengthCreator: (minLength) => (value) => {
  //     if (value && value.length < minLength)
  //       return `Min length is ${minLength} symbols`;
  //     return undefined;
  //   },
};
