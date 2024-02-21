import useUserData from "@/hooks/useUserData";
import React from "react";
import MatchesCard from "./partials/latestMatches/matchesCard";

const SummonerLatestMatchesRender = () => {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col gap-4 px-12 xl:px-0 xl:max-w-none">
      {userData &&
        userData.summonerLatestMatchesData.map((matchData) => (
          <MatchesCard
            searchUserPuiid={userData.summonerData.puuid}
            matchData={matchData}
            key={matchData.matchInfo.gameId}
          />
        ))}
    </div>
  );
};

export default function SummonerLatestMatches() {
  return <SummonerLatestMatchesRender />;
}
