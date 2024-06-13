export const winrate = (wins: number, losses: number) => {
  const winrate = (wins / (wins + losses)) * 100;
  return winrate.toFixed(0);
};
