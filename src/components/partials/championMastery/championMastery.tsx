import React from "react";
import ChampionMasteryCard from "./card";
import useUserData from "@/hooks/useUserData";
import TitleConfig from "@/components/titleConfig";

const ChampionMasteryRender = () => {
  const { userData } = useUserData();

  return (
    <div className="flex flex-col gap-3 w-fit sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2">
      {userData &&
        userData.summonerMasteryChampionsData.map((champion, index) => (
          <div key={index}>
            <ChampionMasteryCard champion={champion} />
          </div>
        ))}
    </div>
  );
};

export default function ChampionMastery() {
  return (
    <div className="w-full flex flex-col place-items-center">
      <TitleConfig
        className={"mt-9 tracking-wider text-xl lg:text-2xl"}
        title="Top 10 Champions by Mastery"
      />
      <ChampionMasteryRender />
    </div>
  );
}
