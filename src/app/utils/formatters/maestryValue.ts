export  const formatMaestryValue = (maestryValue: number) => {
  const partialNumbers = maestryValue.toString().split(".");
  partialNumbers[0] = partialNumbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return partialNumbers.join(".");
};