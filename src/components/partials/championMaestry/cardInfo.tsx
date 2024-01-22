import { lastTimePlayedConverter } from "@/app/utils/formatters/lastTimeConverter";
import { formatMaestryValue } from "@/app/utils/formatters/maestryValue";
import { SummonerMaestryChampionsProps } from "@/app/utils/summonerInfo";
import React from "react";

type CardInfoProps = {
  champion: SummonerMaestryChampionsProps;
};

export default function CardInfo({ champion }: CardInfoProps) {
  return (
    <div className="w-full">
      <h4 className="border-b border-zinc-900 w-full text-center font-semibold mb-2">
        {champion.championName}
      </h4>
      <div className="flex gap-2 items-center justify-between text-sm">
        <div className="flex gap-1 items-center">
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
      <div className="flex gap-1 items-center justify-between mt-1 text-sm">
        <p>Last played: </p>
        <h4 className="font-semibold">
          {lastTimePlayedConverter(champion.lastPlayTime)}
        </h4>
      </div>
    </div>
  );
}
