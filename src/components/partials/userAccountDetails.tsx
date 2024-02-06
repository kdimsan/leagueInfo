import Image from "next/image";
import React from "react";

import useUserData from "@/hooks/useUserData";

export default function UserAccountDetails() {
  const { userData } = useUserData();
  const accountInfo = userData?.summonerData;
  return (
    <div
      className="w-full border-b-2 border-neutral-800 relative 
    lg:border-b-0 lg:after:content[''] after:absolute after:-right-2.5 after:top-0 after:w-0.5 after:h-full after:bg-neutral-800"
    >
      {accountInfo && (
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="relative ">
            <Image
              className="border border-yellow-400 rounded"
              width={100}
              height={100}
              src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${accountInfo.profileIconId}.png`}
              alt="Profile icon"
              quality={100}
            />

            <span className="absolute -bottom-3 left-8 text-sm p-costum-icon-padding bg-amber-400 rounded-full font-semibold">
              {accountInfo.summonerLevel}
            </span>
          </div>
          <div>
            <h4 className="text-lg font-bold">{accountInfo.name}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
