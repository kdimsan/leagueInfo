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
    <td className="text-2xs font-medium text-neutral-300 sm:text-xs">
      <div className="flex flex-col items-center justify-center">
        <span>{totalGold.toLocaleString("en-US")} </span>
        <span className="italic">{goldPerMin.toFixed(1)} /min</span>
      </div>
    </td>
  );
}
