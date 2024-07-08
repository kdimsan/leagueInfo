import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import { findSummoner } from "@/app/utils/functions/findSummoner";
import React from "react";
import WinRateGraphicsRender from "./winRateGraphicsRender";
import TitleConfig from "@/components/titleConfig";

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
    <div className="container w-fit flex flex-col items-center" key={i}>
      <div className="m-auto text-sm font-semibold">{matchData.matchesArr}</div>
      <div className="w-24 h-24 relative">
        <WinRateGraphicsRender matchData={matchData} />
        <p
          className={`${
            matchData.winRate < 50 ? "text-red-500" : "text-green-500"
          } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-xs`}
        >
          {matchData.winRate.toFixed(0)}%
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-xs">
        <div className="flex items-center gap-1 font-semibold"></div>
        <div className="flex flex-items gap-1 text-gray-200">
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
    <div className="flex flex-col gap-3 xl:gap-5">
      <TitleConfig
        className="tracking-wider text-xl lg:text-2xl mb-0"
        title="Latest 20 Matches"
      />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {initializer}
      </div>
    </div>
  );
}
