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
      [key: string]: {
        count: number;
        wins: number;
        losses: number;
      };
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
    <div className="w-fit flex flex-col items-center" key={i}>
      <div className="m-auto text-xs font-semibold">{matchData.matchesArr}</div>
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
    <div className="flex flex-col items-center gap-3 bg-[#262A3B] shadow-[0px_0px_5px_1px_rgba(17,17,17,1)] rounded-md py-4 px-2">
      <TitleConfig
        className="tracking-wider text-xl mb-0"
        title="Last 20 Matches"
      />
      <div className="flex flex-wrap items-center justify-center gap-6 w-fit default-bg p-1 shadow-[0px_0px_5px_1px_rgba(17,17,17,1)]">
        {initializer}
      </div>
    </div>
  );
}
