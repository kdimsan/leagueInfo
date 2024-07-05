import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import { findSummoner } from "@/app/utils/functions/findSummoner";
import React from "react";
import WinRateGraphicsRender from "./winRateGraphicsRender";

export default function WinRate({
  data,
}: {
  data: SummonerLatestMatchesProps[];
}) {
  const counter = (matchesArr: SummonerLatestMatchesProps[]) => {
    const countMap: {
      [key: string]: { count: number; wins: number; losses: number };
    } = Object.create(null);

    for (const element of matchesArr) {
      if (!countMap[element.matchInfo.queueType.queueDescription]) {
        countMap[element.matchInfo.queueType.queueDescription] = {
          count: 0,
          wins: 0,
          losses: 0,
        };
      }
      countMap[element.matchInfo.queueType.queueDescription].count += 1;
      if (element.matchInfo.searchSummonerData.win) {
        countMap[element.matchInfo.queueType.queueDescription].wins += 1;
      } else {
        countMap[element.matchInfo.queueType.queueDescription].losses += 1;
      }
    }
    return Object.entries(countMap).map(
      ([matchesArr, { count, wins, losses }]) => ({
        matchesArr,
        quantity: count,
        wins: wins,
        losses: losses,
        winRate: (wins / count) * 100,
      })
    );
  };
  const initializer = counter(data).map((matchData, i) => (
    <div className="w-fit h-fit" key={i}>
      <WinRateGraphicsRender matchData={matchData} />
      <div className="flex flex-col items-center justify-center text-xs">
        <div className="flex items-center gap-1">
          {matchData.matchesArr}{" "}
          <p
            className={`${
              matchData.winRate < 50 ? "text-red-500" : "text-green-500"
            }`}
          >
            {matchData.winRate.toFixed(0)}%
          </p>
        </div>
        <div className="flex flex-items gap-1">
          Total: {matchData.quantity}{" "}
          <p
            className={`${
              matchData.wins < matchData.losses
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            ({matchData.wins}/{matchData.losses})
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-3">
      {initializer}
    </div>
  );
}
