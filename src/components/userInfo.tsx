import React from "react";
import UserData from "./partials/userData";
import ChampionMaestry from "./partials/championMaestry/championMaestry";
import TitleConfig from "./titleConfig";
import SummonerLatestMatches from "./summonerLatestMatches";

export default function UserInfo() {
  return (
    <div>
      <div className="flex flex-col px-3 bg-neutral-800 xl:p-5 xl:rounded-lg xl:flex-row xl:justify-between xl:gap-6">
        <div className="flex flex-col items-center mt-8 lg:mt-0">
          <UserData />

          <TitleConfig
            className={"mt-9 -mb-1 text-xl lg:text-2xl"}
            title="Top 10 Champions by Maestry"
          />
          <ChampionMaestry />
        </div>
        <div className="m-auto w-full py-2 xl:m-0 xl:w-1/2">
          <SummonerLatestMatches />
        </div>
      </div>
    </div>
  );
}
