import useUserData from "@/hooks/useUserData";
import React, { Suspense } from "react";
import UserAccountDetails from "./userAccountDetails";
import UserRank from "./userRank";

const UserDataRender = () => {
  const { userData } = useUserData();

  return (
    <div className="w-full max-w-lg lg:px-0">
      <div
        className="flex flex-col items-center justify-center w-full gap-5 bg-neutral-600 py-4 px-5 rounded-md mt-8
        lg:flex-row lg:px-5"
      >
        <UserAccountDetails />
        <div className="flex flex-col gap-3 w-full">
          {userData?.summonerRankedData.length == 0 ? (
            <div className="flex items-center justify-center">
              <span className="font-medium">No ranked info avaliable</span>
            </div>
          ) : (
            userData &&
            userData.summonerRankedData.map((rankData) => (
              <UserRank key={rankData.leagueId} rankedsData={rankData} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default function UserData() {
  return <UserDataRender />;
}
