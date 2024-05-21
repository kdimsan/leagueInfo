import Image from "next/image";
import React from "react";

import useUserData from "@/hooks/useUserData";

export default function UserAccountDetails() {
  const { userData } = useUserData();
  const accountInfo = userData?.summonerData;
  return (
    <div
      className="w-full relative after:content[''] after:absolute after:right-0 after:-bottom-2.5 after:h-0.5 after:w-full
     lg:after:content-[''] lg:after:-right-2.5 lg:after:top-0 lg:after:w-0.5 lg:after:h-full after:bg-neutral-800"
    >
      {accountInfo && (
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <div className="relative ">
            <Image
              className="border-2 border-yellow-400 rounded-md"
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
          <div className="flex flex-col items-center lg:flex-row">
            <h4 className="text-lg font-bold">{accountInfo.gameName}</h4>
            <h4 className="text-lg font-bold italic text-neutral-400">
              #{accountInfo.tagLine}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
