import { lastTimePlayedConverter } from "@/app/utils/formatters/timeCalculators";
import { formatMaestryValue } from "@/app/utils/formatters/maestryValue";
import { SummonerMaestryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";

type CardInfoProps = {
  champion: SummonerMaestryChampionsProps;
};

export default function CardInfo({ champion }: CardInfoProps) {
  return (
    <div className="">
      <h4 className="border-b border-zinc-900 m-auto text-center font-semibold mb-2">
        {champion.championName}
      </h4>
      <div
        className="flex gap-2 items-center justify-between text-xs 
      xl:flex-col xl:gap-1 xl:justify-normal xl:items-start 
      2xl:flex-row 2xl:gap-2 2xl:justify-between 2xl:items-center"
      >
        <div className="flex gap-1 items-center xl:justify-between">
          <p>Maestry Level:</p>
          <p className="font-semibold">{champion.championLevel}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>Points:</p>
          <p className="font-semibold">
            {formatMaestryValue(champion.championPoints)}
          </p>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-between mt-1 text-xs">
        <p>Last played: </p>
        <p className="font-semibold">
          {lastTimePlayedConverter(champion.lastPlayTime)}
        </p>
      </div>
    </div>
  );
}
