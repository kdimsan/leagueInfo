export const calculateFarmPerMin = (
  totalFarm: number,
  gameDuration: number
) => {
  return (totalFarm / (gameDuration / 60)).toFixed(2);
};
