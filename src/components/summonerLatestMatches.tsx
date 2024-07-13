import useUserData from "@/hooks/useUserData";
import React from "react";
import WinRate from "./partials/latestMatches/winRateGraphics/winRate";
import SummonerRolesPlayed from "./partials/latestMatches/summonerRolesPlayed/summonerRolesPlayed";
import TitleConfig from "./titleConfig";

const SummonerLatestMatchesRender = () => {
  const { userData } = useUserData();
  return (
    <div className="flex flex-col gap-6 xl:max-w-none">
      {userData && <WinRate data={userData.summonerLatestMatchesData} />}
      <div className="flex flex-col gap-3 items-center bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] rounded-md py-4 px-2">
        <TitleConfig title="Last Roles" className="text-xl lg:text-xl" />
        <SummonerRolesPlayed />
      </div>
    </div>
  );
};

export default function SummonerLatestMatches() {
  return <SummonerLatestMatchesRender />;
}
