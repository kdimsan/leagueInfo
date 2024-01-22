import React from "react";
import ChampionMaestryCard from "./card";
import useUserData from "@/hooks/useUserData";

export default function ChampionMaestry() {
  const { userData } = useUserData();

  const data = userData;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
      {data &&
        data.summonerMaestryChampionsData.map((champion, index) => (
          <ChampionMaestryCard champion={champion} key={index} />
        ))}
    </div>
  );
}
