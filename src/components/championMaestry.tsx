import { lastTimePlayedConverter } from "@/app/utils/formatters/lastTimeConverter";
import { formatMaestryValue } from "@/app/utils/formatters/maestryValue";
import { patch } from "@/app/utils/patch";
import { SummonerMaestryChampionsProps } from "@/app/utils/summonerInfo";
import React from "react";

interface ChampionMaestryData {
  maestryData: SummonerMaestryChampionsProps;
}

export default function ChampionMaestry({ maestryData }: ChampionMaestryData) {
  return (
    <div className="w-full flex flex-col items-center mt-4">
      <div className="w-full max-w-xs flex gap-3 bg-neutral-600 rounded-md py-2 px-3">
        <div className="flex  items-center">
          <img
            className="h-20 rounded-md"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${maestryData.championName}.png`}
            alt="Champion image"
            width={100}
          />
        </div>
        <div className="w-full">
          <h4 className="border-b border-zinc-900 w-full text-center font-semibold mb-2">
            {maestryData.championName}
          </h4>
          <div className="flex gap-2 items-center justify-between text-sm">
            <div className="flex gap-1 items-center">
              <p>Maestry Level:</p>
              <p className="font-semibold">{maestryData.championLevel}</p>
            </div>
            <div className="flex gap-1 items-center">
              <p>Points:</p>
              <p className="font-semibold">
                {formatMaestryValue(maestryData.championPoints)}
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between text-sm">
            <p>Last played: </p>
            <h4 className="font-semibold">
              {lastTimePlayedConverter(maestryData.lastPlayTime)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
