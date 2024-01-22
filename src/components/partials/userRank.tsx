import { winrate } from "@/app/utils/formatters/calculateWinrate";
import { SummonerRankedProps } from "@/app/utils/@types/summonerInfo";
import React from "react";

interface UserRankProps {
  data: SummonerRankedProps;
}

export default function UserRank({ data }: UserRankProps) {
  const currentWinrate = winrate(data.wins, data.losses);

  const winrateClass =
    currentWinrate < "50" ? "text-red-500" : "text-green-500";

  return (
    <div className="flex flex-col items-center bg-neutral-600 py-2 px-5 rounded-md w-full max-w-xs ">
      <h4 className="flex items-center justify-center font-bold text-base mb-2 border-b border-zinc-900 w-full">
        {data.queueType === "RANKED_FLEX_SR" ? "Ranked Flex" : "Ranked Solo"}
      </h4>
      <div className="flex items justify-between w-full">
        <div>
          <p className="text-sm mb-2">
            {data.tier} {data.rank}
          </p>
        </div>

        <p className="text-sm">{data.leaguePoints} LP</p>
        <div className="text-sm flex gap-2">
          <span>
            {data.wins}W/{data.losses}L
          </span>
          <span className={`${winrateClass} font-semibold`}>
            {currentWinrate}%
          </span>
        </div>
      </div>
    </div>
  );
}
