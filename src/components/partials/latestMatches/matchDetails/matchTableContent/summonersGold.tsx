import React from "react";

interface SummonerGoldProps {
  goldPerMin: number;
  totalGold: number;
}

export default function SummonersGold({
  goldPerMin,
  totalGold,
}: SummonerGoldProps) {
  return (
    <td className="text-xs font-medium text-neutral-300">
      <span>{totalGold.toLocaleString("en-US")} </span>
      <span className="italic">| {goldPerMin.toFixed(1)}/min</span>
    </td>
  );
}
