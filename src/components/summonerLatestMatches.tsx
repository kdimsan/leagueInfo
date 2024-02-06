import useUserData from "@/hooks/useUserData";
import React from "react";
import MatchesCard from "./partials/latestMatches/matchesCard";

export default function SummonerLatestMatches() {
  const { userData } = useUserData();
  const data = userData?.summonerLatestMatchesData;

  const searchUserPuiid = userData?.summonerData.puuid;

  return (
    <div className="flex flex-col gap-4 px-12 xl:px-0 xl:max-w-none">
      {data &&
        searchUserPuiid &&
        data.map((matchData) => (
          <MatchesCard
            searchUserPuiid={searchUserPuiid}
            matchData={matchData}
            key={matchData.matchInfo.gameId}
          />
        ))}
    </div>
  );
}
