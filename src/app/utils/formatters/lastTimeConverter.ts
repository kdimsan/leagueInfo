export const lastTimePlayedConverter = (unixDate: number) => {
  var date = new Date(unixDate);
  const formatted = date.toLocaleString();
  return formatted;
};
