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
  const farmPerMin = calculateFarmPerMin(totalFarm, gameDuration);
  const farmPerMinColors =
    Number(farmPerMin) > 2
      ? Number(farmPerMin) > 6
        ? Number(farmPerMin) > 8
          ? Number(farmPerMin) > 9
            ? "text-legend-collor"
            : "text-ultrarare-collor"
          : "text-rare-color"
        : "text-common-color"
      : "text-neutral-400";
  return (
    <td className="text-2xs font-medium text-neutral-300 sm:text-xs">
      <div className="flex flex-col justify-center items-center">
        <span>{totalFarm}</span>
        <span className={`italic font-bold ${farmPerMinColors}`}>
          {farmPerMin} /min
        </span>
      </div>
    </td>
  );
}
