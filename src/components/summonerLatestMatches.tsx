import useUserData from "@/hooks/useUserData";
import React from "react";
import MatchesCard from "./partials/latestMatches/matchesCard";
import TitleConfig from "./titleConfig";
import WinRate from "./partials/latestMatches/winRateGraphics/winRate";

const SummonerLatestMatchesRender = () => {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col gap-4 xl:px-0 xl:max-w-none">
      <TitleConfig
        className="tracking-wider text-xl lg:text-2xl mb-0 mt-6 xl:mt-2"
        title="Latest 20 Matches"
      />
      {userData && <WinRate data={userData.summonerLatestMatchesData} />}
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
};

export default function SummonerLatestMatches() {
  return <SummonerLatestMatchesRender />;
}
