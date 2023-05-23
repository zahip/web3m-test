export const deleteFromDictionary = (key, list) => {
  const copyCarValues = { ...list };
  delete copyCarValues[key];
  return copyCarValues;
};
