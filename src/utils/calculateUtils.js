export const getPercentageDifference = (previousValue, currentValue) => {
  return ((currentValue - previousValue) / previousValue) * 100;
};
