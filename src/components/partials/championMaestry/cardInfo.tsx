import { lastTimePlayedConverter } from "@/app/utils/formatters/timeCalculators";
import { formatMaestryValue } from "@/app/utils/formatters/maestryValue";
import { SummonerMaestryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";

type CardInfoProps = {
  champion: SummonerMaestryChampionsProps;
};

export default function CardInfo({ champion }: CardInfoProps) {
  return (
    <div className="w-full">
      <h4 className="border-b border-zinc-900 m-auto text-center font-semibold mb-2">
        {champion.championName}
      </h4>
      <div className="flex flex-col gap-1 text-xs">
        <div className="flex items-center gap-1">
          <span className="">Maestry Level:</span>
          <span className="font-semibold">{champion.championLevel}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Points:</span>
          <span className="font-semibold">
            {formatMaestryValue(champion.championPoints)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-nowrap">Last played:</span>
          <span className="font-semibold">
            {lastTimePlayedConverter(champion.lastPlayTime)}
          </span>
        </div>
      </div>
    </div>
  );
}
