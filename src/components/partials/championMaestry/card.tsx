import { SummonerMaestryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";
import ChampionMaestryImg from "./cardImage";
import CardInfo from "./cardInfo";

interface ChampionMaestryCardProps {
  champion: SummonerMaestryChampionsProps;
}

export default function ChampionMaestryCard({
  champion,
}: ChampionMaestryCardProps) {
  const championName = champion.championName
    .replace(/(?<=')[A-Z]/g, (match) => match.toLowerCase())
    .replace(/[ -']/g, "");

  return (
    <div className="flex gap-3 bg-neutral-700 rounded-md py-2 px-3 lg:max-w-none">
      <ChampionMaestryImg championName={championName} />
      <CardInfo champion={champion} />
    </div>
  );
}
