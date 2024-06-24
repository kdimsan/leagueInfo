export const formatMasteryValue = (masteryValue: number) => {
  const partialNumbers = masteryValue.toString().split(".");
  partialNumbers[0] = partialNumbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return partialNumbers.join(".");
};
