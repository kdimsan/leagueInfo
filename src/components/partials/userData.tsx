import useUserData from "@/hooks/useUserData";
import React, { Suspense } from "react";
import UserAccountDetails from "./userAccountDetails";
import UserRank from "./userRank";

const UserDataRender = () => {
  const { userData } = useUserData();

  if (!userData) {
    throw new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }
  return (
    <div className="w-full px-10 lg:px-0">
      <div
        className="flex flex-col items-center justify-center w-full gap-5 bg-neutral-600 py-4 rounded-md mt-8
        lg:flex-row lg:px-5"
      >
        <UserAccountDetails />
        <div className="flex flex-col gap-3 w-full">
          {userData.summonerRankedData.map((rankData) => (
            <UserRank key={rankData.leagueId} rankedsData={rankData} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  const { userName } = useUserData();
  return (
    <div className="w-auto px-10 lg:px-0">
      <div
        className="flex flex-col items-center justify-center w-full gap-5 bg-neutral-600 py-4 rounded-md mt-8
          lg:flex-row lg:px-5 lg:w-96 lg:items-center lg:justify-between"
      >
        <div className="flex items-center justify-center px-24 lg:w-44">
          <div
            className="w-28 h-28 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size
          relative after:content[''] after:absolute after:right-0 after:-bottom-2.5 after:h-0.5 after:w-full
          lg:after:content-[''] lg:after:-right-6 lg:after:top-0 lg:after:w-0.5 lg:after:h-full after:bg-neutral-800"
          ></div>
          <div className="flex items-center justify-center mt-1">
            <span>{userName[0]}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-36">
          <div className="flex flex-col items-end gap-y-3 border-neutral-800">
            <div className="w-full h-8 bg-neutral-500 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            <div className="w-full h-8 bg-neutral-500 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function UserData() {
  return (
    <Suspense fallback={<Loading />}>
      <UserDataRender />
    </Suspense>
  );
}
