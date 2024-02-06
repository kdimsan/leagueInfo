import React from "react";
import UserData from "./partials/userData";
import UserRank from "./partials/userRank";
import ChampionMaestry from "./partials/championMaestry/championMaestry";
import TitleConfig from "./titleConfig";
import useUserData from "@/hooks/useUserData";
import SummonerLatestMatches from "./summonerLatestMatches";

export default function UserInfo() {
  return (
    <div>
      <div className="flex flex-col bg-neutral-800 xl:px-8 xl:py-5 xl:rounded-lg xl:flex-row xl:justify-between xl:gap-6">
        <div className="flex flex-col items-center mt-8 lg:mt-0">
          <UserData />

          <TitleConfig
            className={"mt-9 -mb-1"}
            title="Top 10 Champions by Maestry"
          />

          <div className="">
            <ChampionMaestry />
          </div>
        </div>
        <div className="m-auto xl:m-0">
          <SummonerLatestMatches />
        </div>
      </div>
    </div>
  );
}
