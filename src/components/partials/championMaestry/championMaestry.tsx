import React, { Suspense } from "react";
import ChampionMaestryCard from "./card";
import useUserData from "@/hooks/useUserData";
import TitleConfig from "@/components/titleConfig";

const ChampionMaestryRender = () => {
  const { userData } = useUserData();

  return (
    <div className="flex flex-col gap-3 w-fit sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
      {userData &&
        userData.summonerMaestryChampionsData.map((champion, index) => (
          <div key={index}>
            <ChampionMaestryCard champion={champion} />
          </div>
        ))}
    </div>
  );
};

export default function ChampionMaestry() {
  return (
    <div className="w-full flex flex-col place-items-center">
      <TitleConfig
        className={"mt-9 tracking-wider text-xl lg:text-2xl"}
        title="Top 10 Champions by Maestry"
      />
      <ChampionMaestryRender />
    </div>
  );
}
