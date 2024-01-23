import React from "react";
import UserData from "./partials/userData";
import UserRank from "./partials/userRank";
import ChampionMaestry from "./partials/championMaestry/championMaestry";
import TitleConfig from "./titleConfig";
import useUserData from "@/hooks/useUserData";
import SummonerLatestMatches from "./summonerLatestMatches";

export default function UserInfo() {
  const { userData } = useUserData();

  const data = userData;

  return (
    <div>
      {data && (
        <div className="bg-neutral-800  xl:py-5 xl:rounded-lg flex flex-col xl:flex-row ">
          <div className="flex flex-col items-center mt-8 xl:w-1/2">
            <UserData />

            <div className="flex flex-col items-center  gap-4 justify-center mt-8 w-full lg:flex-row">
              {data.summonerRankedData.map((item, index) => (
                <UserRank data={item} key={index} />
              ))}
            </div>

            <TitleConfig
              className={"mt-9 -mb-1"}
              title="Top 10 Champions by Maestry"
            />

            <div className="">
              <ChampionMaestry />
            </div>
          </div>
          <div className="xl: w-1/2">
            <SummonerLatestMatches />
          </div>
        </div>
      )}
    </div>
  );
}
