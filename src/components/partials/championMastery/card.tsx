import { SummonerMasteryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";
import ChampionMasteryImg from "./cardImage";
import CardInfo from "./cardInfo";

interface ChampionMasteryCardProps {
  champion: SummonerMasteryChampionsProps;
}

export default function ChampionMasteryCard({
  champion,
}: ChampionMasteryCardProps) {
  const championName = champion.championName
    .replace(/(?<=')[A-Z]/g, (match) => match.toLowerCase())
    .replace(/[ -']/g, "");

  return (
    <div className="flex items-center gap-3 bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] rounded-md py-2 px-3 lg:max-w-none">
      <ChampionMasteryImg championName={championName} />
      <CardInfo champion={champion} />
    </div>
  );
}
