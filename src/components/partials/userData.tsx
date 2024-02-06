import useUserData from "@/hooks/useUserData";
import React from "react";
import UserAccountDetails from "./userAccountDetails";
import UserRank from "./userRank";

export default function UserData() {
  const { userData } = useUserData();
  const data = userData?.summonerData;
  const rankedData = userData?.summonerRankedData;

  return (
    <div className="w-full px-10 lg:px-0">
      <div
        className="flex flex-col items-center justify-center w-full gap-5 bg-neutral-600 py-4 rounded-md mt-8
        lg:flex-row lg:px-5"
      >
        {data && <UserAccountDetails />}
        <div className="flex flex-col gap-3 w-full">
          {rankedData &&
            rankedData.map((rankData) => (
              <UserRank key={rankData.leagueId} rankedsData={rankData} />
            ))}
        </div>
      </div>
    </div>
  );
}
