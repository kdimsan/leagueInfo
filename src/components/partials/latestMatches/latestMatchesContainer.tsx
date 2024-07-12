import useUserData from "@/hooks/useUserData";
import React from "react";
import MatchesCard from "./matchesCard";
import TitleConfig from "@/components/titleConfig";

export default function LatestMatchesContainer() {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col items-center gap-4 w-full rounded-md bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] p-4">
      <div>
        <TitleConfig title="Last Matches" className="tracking-wider text-xl" />
      </div>
      {userData &&
        userData.summonerLatestMatchesData.map((matchData) => (
          <MatchesCard
            searchUserPuuid={userData.summonerData.puuid}
            matchData={matchData}
            key={matchData.matchInfo.gameId}
          />
        ))}
    </div>
  );
}
