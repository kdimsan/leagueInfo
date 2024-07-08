import React from "react";
import ChampionMasteryCard from "./card";
import useUserData from "@/hooks/useUserData";
import TitleConfig from "@/components/titleConfig";

const ChampionMasteryRender = () => {
  const { userData } = useUserData();

  return (
    <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-3 w-fit">
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
    <div className="w-full flex flex-col gap-4 place-items-center bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] rounded-md px-2 py-4">
      <TitleConfig
        className={"tracking-wider text-xl lg:text-2xl"}
        title="Top 10 Champions by Mastery"
      />
      <ChampionMasteryRender />
    </div>
  );
}
