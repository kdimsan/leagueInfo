import { SummonerMaestryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";
import ChampionMaestryImg from "./cardImage";
import CardInfo from "./cardInfo";

interface ChampionMaestryCardProps {
  champion: SummonerMaestryChampionsProps;
  key: number;
}

export default function ChampionMaestryCard({
  champion,
  key,
}: ChampionMaestryCardProps) {
  const championName = champion.championName
    .replace(/(?<=')[A-Z]/g, (match) => match.toLowerCase())
    .replace(/[ -']/g, "");

  return (
    <div className="w-full flex flex-col items-center mt-4" key={key}>
      <div className="w-full max-w-xs flex gap-3 bg-neutral-700 rounded-md py-2 px-3 lg:max-w-sm">
        <ChampionMaestryImg championName={championName} />
        <CardInfo champion={champion} />
      </div>
    </div>
  );
}
