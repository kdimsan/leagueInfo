import { SummonerAccountProps } from "@/app/utils/summonerInfo";
import React from "react";

interface UserDataProps {
  data: SummonerAccountProps;
}

export default function UserData({ data }: UserDataProps) {
  return (
    <div className="flex items-center justify-center w-full mt-16 gap-3">
      <img
        className="border border-yellow-400 rounded"
        width={75}
        height={75}
        src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${data.profileIconId}.png`}
        alt="Profile icon"
      />
      <div>
        <h4>Nick: {data.name}</h4>
        <span>Summoner level: {data.summonerLevel}</span>
      </div>
    </div>
  );
}
