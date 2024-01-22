import useUserData from "@/hooks/useUserData";
import React from "react";

export default function UserData() {
  const { userData } = useUserData();
  const data = userData?.summonerData;
  return (
    <div>
      {data && (
        <div className="flex items-center  justify-center w-full gap-3">
          <div className="relative ">
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
            <h4 className="text-lg font-bold">{data.name}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
