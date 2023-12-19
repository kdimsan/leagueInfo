import { SummonerProps } from "@/app/utils/summonerInfo";
import React from "react";
import UserData from "./partials/userData";
import UserRank from "./partials/userRank";
import ChampionMaestry from "./partials/championMaestry";
import TitleConfig from "./titleConfig";

interface UserInfoProps {
  userData: SummonerProps;
}

export default function UserInfo({ userData }: UserInfoProps) {
  return (
    <div className="w-1/2">
      <div className="flex flex-col items-center">
        <UserData data={userData.SUMMONER_DATA_RES} />

        <div className="flex flex-col items-center  gap-4 justify-center mt-8 w-full lg:flex-row">
          {userData.SUMMONER_RANKED_RES.map((item, index) => (
            <UserRank data={item} key={index} />
          ))}
        </div>

        <TitleConfig title="Top 10 Champions by Maestry" />

        <div className=" lg:grid lg:grid-cols-2 lg:gap-x-4">
          {userData.TOP_MAESTRY_CHAMPION.map((champ, index) => (
            <ChampionMaestry maestryData={champ} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
