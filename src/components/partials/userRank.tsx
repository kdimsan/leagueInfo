import { winrate } from "@/app/utils/formatters/calculateWinrate";
import { SummonerRankedProps } from "@/app/utils/@types/summonerInfo";
import React from "react";
import Image from "next/image";

interface UserRankProps {
  rankedsData: SummonerRankedProps;
}

export default function UserRank({ rankedsData }: UserRankProps) {
  const currentWinrate = winrate(rankedsData.wins, rankedsData.losses);

  const winrateClass =
    currentWinrate < "50" ? "text-red-500" : "text-green-500";

  return (
    <div className="flex flex-col first:border-b-2 border-neutral-800">
      <div className="flex items-center justify-center">
        <h4 className="font-bold">
          {rankedsData.queueType === "RANKED_FLEX_SR"
            ? "Ranked Flex"
            : "Ranked Solo"}
        </h4>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <div className="flex items-center justify-center gap-1">
          <Image
            className="h-14 w-14"
            src={`/rankedEmblems/${rankedsData.tier.toLowerCase()}.png`}
            width={100}
            height={100}
            quality={100}
            alt="summoner rank"
          />
          <span className="font-title text-lg tracking-wide">
            {rankedsData.rank}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            {rankedsData.wins}W/{rankedsData.losses}L
          </span>
          <span className={`${winrateClass} font-semibold`}>
            {currentWinrate}%
          </span>
        </div>
      </div>
    </div>
  );
}
