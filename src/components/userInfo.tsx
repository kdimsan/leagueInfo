import React from "react";
import UserData from "./partials/userData";
import ChampionMaestry from "./partials/championMaestry/championMaestry";
import TitleConfig from "./titleConfig";
import SummonerLatestMatches from "./summonerLatestMatches";

export default function UserInfo() {
  return (
    <div>
      <div className="flex flex-col bg-neutral-800 xl:px-8 xl:py-5 xl:rounded-lg xl:flex-row xl:justify-between xl:gap-6">
        <div className="flex flex-col items-center mt-8 lg:mt-0">
          <UserData />

          <TitleConfig
            className={"mt-9 -mb-1 text-xl lg:text-2xl"}
            title="Top 10 Champions by Maestry"
          />
          <ChampionMaestry />
        </div>
        <div className="m-auto xl:m-0">
          <SummonerLatestMatches />
        </div>
      </div>
    </div>
  );
}
