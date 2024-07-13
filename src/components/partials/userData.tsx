import useUserData from "@/hooks/useUserData";
import React, { Suspense } from "react";
import UserAccountDetails from "./userAccountDetails";
import UserRank from "./userRank";
import Image from "next/image";

const UserDataRender = () => {
  const { userData } = useUserData();

  return (
    <div
      className="flex flex-col w-full h-full flex-1 flex-grow items-center justify-center gap-4 bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] py-4 px-5 rounded-md
        lg:flex-row lg:px-5"
    >
      <UserAccountDetails />
      <div className="flex flex-col gap-3 w-full">
        {userData?.summonerRankedData.length == 0 ? (
          <div className="flex items-center justify-center">
            <Image
              className="h-14 w-14 lg:h-20 lg:w-20"
              src={`/rankedEmblems/unranked.png`}
              width={100}
              height={100}
              unoptimized
              alt="summoner rank"
            />
            <span>No ranked data</span>
          </div>
        ) : (
          userData &&
          userData.summonerRankedData.map((rankData) => (
            <UserRank key={rankData.leagueId} rankedsData={rankData} />
          ))
        )}
      </div>
    </div>
  );
};

export default function UserData() {
  return <UserDataRender />;
}
