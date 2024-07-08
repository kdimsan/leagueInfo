import useUserData from "@/hooks/useUserData";
import React from "react";
import MatchesCard from "./partials/latestMatches/matchesCard";
import TitleConfig from "./titleConfig";
import WinRate from "./partials/latestMatches/winRateGraphics/winRate";

const SummonerLatestMatchesRender = () => {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col gap-4 xl:px-3 xl:max-w-none xl:gap-6 bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] rounded-md py-4 px-2">
      {userData && <WinRate data={userData.summonerLatestMatchesData} />}
      <div className="flex flex-col gap-3">
        {userData &&
          userData.summonerLatestMatchesData.map((matchData) => (
            <MatchesCard
              searchUserPuuid={userData.summonerData.puuid}
              matchData={matchData}
              key={matchData.matchInfo.gameId}
            />
          ))}
      </div>
    </div>
  );
};

export default function SummonerLatestMatches() {
  return <SummonerLatestMatchesRender />;
}
