import useUserData from "@/hooks/useUserData";
import React, { Suspense } from "react";
import MatchesCard from "./partials/latestMatches/matchesCard";

const SummonerLatestMatchesRender = () => {
  const { userData } = useUserData();
  if (!userData) {
    throw new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
  }
  return (
    <div className="flex flex-col gap-4 px-12 xl:px-0 xl:max-w-none">
      {userData.summonerLatestMatchesData.map((matchData) => (
        <MatchesCard
          searchUserPuiid={userData.summonerData.puuid}
          matchData={matchData}
          key={matchData.matchInfo.gameId}
        />
      ))}
    </div>
  );
};

const Loading = () => {
  const skeletonArrayMatches = new Array(20).fill({});
  return (
    <div className="w-full">
      {skeletonArrayMatches.map((data, i) => (
        <div
          className={`card-container flex justify-between gap-4 px-4 py-3 rounded-lg h-36 bg-red-500`}
          key={i}
        >
          <div className="w-24 h-full bg-neutral-600"></div>
          <div className="w-40 h-full bg-neutral-600"></div>
          <div className="w-24 h-full bg-neutral-600"></div>
        </div>
      ))}
    </div>
  );
};

export default function SummonerLatestMatches() {
  return (
    <Suspense fallback={<Loading />}>
      <SummonerLatestMatchesRender />
    </Suspense>
  );
}
