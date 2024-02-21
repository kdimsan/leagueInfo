import React, { Suspense } from "react";
import ChampionMaestryCard from "./card";
import useUserData from "@/hooks/useUserData";

const ChampionMaestryRender = () => {
  const { userData } = useUserData();

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
      {userData &&
        userData.summonerMaestryChampionsData.map((champion, index) => (
          <div className="my-2" key={index}>
            <ChampionMaestryCard champion={champion} />
          </div>
        ))}
    </div>
  );
};

export default function ChampionMaestry() {
  return <ChampionMaestryRender />;
}
