import { SummonerAccountProps } from "@/app/utils/summonerInfo";
import React from "react";

interface UserDataProps {
  data: SummonerAccountProps;
}

export default function UserData({ data }: UserDataProps) {
  return (
    <div className="flex items-center  justify-center w-full mt-16 gap-3">
      <div className="relative">
        <img
          className="border border-yellow-400 rounded"
          width={100}
          height={100}
          src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${data.profileIconId}.png`}
          alt="Profile icon"
        />

        <span className="absolute -bottom-3 left-8 text-sm p-costum-icon-padding bg-amber-400 rounded-full font-semibold">
          {data.summonerLevel}
        </span>
      </div>

      <div>
        <h4>{data.name}</h4>
      </div>
    </div>
  );
}
