import React, { Suspense } from "react";
import ChampionMaestryCard from "./card";
import useUserData from "@/hooks/useUserData";

const ChampionMaestryRender = () => {
  const { userData } = useUserData();
  if (!userData) {
    throw new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
      {userData.summonerMaestryChampionsData.map((champion, index) => (
        <ChampionMaestryCard champion={champion} key={index} />
      ))}
    </div>
  );
};

const Loading = () => {
  const skeletonArrayMaestry = new Array(10).fill({});
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
      {skeletonArrayMaestry.map((data, i) => (
        <div key={i} className="">
          <div className="flex flex-col items-center mt-4">
            <div className="w-full max-w-xs flex gap-3 bg-neutral-700 rounded-md py-2 px-3 lg:max-w-sm">
              <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size w-20 h-20 rounded-md"></div>
              <div className="">
                <div className="flex items-center justify-center w-full border-b mb-2 border-zinc-900">
                  <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-4 w-1/2 mb-2"></div>
                </div>
                <div className="flex gap-2 items-center justify-between text-xs">
                  <div className="flex gap-1 items-center">
                    <p className="whitespace-nowrap">Maestry Level:</p>
                    <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-12"></div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p>Points:</p>
                    <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-12"></div>
                  </div>
                </div>
                <div className="flex gap-1 items-center justify-between mt-1 text-xs">
                  <p>Last played: </p>
                  <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ChampionMaestry() {
  return (
    <Suspense fallback={<Loading />}>
      <ChampionMaestryRender />
    </Suspense>
  );
}
