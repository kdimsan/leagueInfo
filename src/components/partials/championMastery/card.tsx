import { SummonerMasteryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";
import ChampionMasteryImg from "./cardImage";

interface ChampionMasteryCardProps {
  champion: SummonerMasteryChampionsProps;
}

export default function ChampionMasteryCard({
  champion,
}: ChampionMasteryCardProps) {
  return (
    <div className="">
      <ChampionMasteryImg champion={champion} />
    </div>
  );
}
