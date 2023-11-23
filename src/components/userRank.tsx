import { SummonerRankedProps } from "@/app/utils/summonerInfo";
import React from "react";

interface UserRankProps {
  data: SummonerRankedProps;
}

export default function UserRank({ data }: UserRankProps) {
  return (
    <div className="flex flex-col items-center bg-neutral-600 py-2 px-5 rounded-md w-4/5 max-w-xs ">
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
        <span className="text-sm">
          {data.wins}/{data.losses}{" "}
          {(data.wins / (data.wins + data.losses)) * 100}%
        </span>
      </div>
    </div>
  );
}
