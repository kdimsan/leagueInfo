import { calculateFarmPerMin } from "@/app/utils/formatters/calculateFarmPerMin";
import React from "react";

interface SummonersFarmProps {
  totalFarm: number;
  gameDuration: number;
}

export default function SummonersFarm({
  totalFarm,
  gameDuration,
}: SummonersFarmProps) {
  return (
    <td className="text-xs font-medium text-neutral-300">
      <span>{totalFarm} </span>
      <span className="italic">
        | {calculateFarmPerMin(totalFarm, gameDuration)}/min
      </span>
    </td>
  );
}
