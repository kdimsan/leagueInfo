import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import getImageSquareCrop from "@/app/utils/functions/imageSquareCropFn";
import TitleConfig from "@/components/titleConfig";
import useUserData from "@/hooks/useUserData";
import Image from "next/image";
import React from "react";

export default function LatestChampions() {
  const { userData } = useUserData();

  const lastChampions =
    userData?.summonerLatestMatchesData?.map((match) => {
      return {
        champion: match.matchInfo.searchSummonerData.championName,
        win: match.matchInfo.searchSummonerData.win,
      };
    }) ?? [];

  const counter = (arr: { champion: string; win: boolean }[]) => {
    const countMap: {
      [key: string]: { count: number; wins: number; losses: number };
    } = Object.create(null);
    for (const element of arr) {
      if (!countMap[element.champion]) {
        countMap[element.champion] = { count: 0, wins: 0, losses: 0 };
      }
      countMap[element.champion].count += 1;
      if (element.win) {
        countMap[element.champion].wins += 1;
      } else {
        countMap[element.champion].losses += 1;
      }
    }
    return Object.entries(countMap)
      .map(([champion, { count, wins, losses }]) => ({
        champion,
        quantity: count,
        win: wins,
        losses: losses,
        winRate: (wins / count) * 100,
      }))
      .sort((a, b) => {
        if (b.quantity === a.quantity) {
          return b.winRate - a.winRate;
        }
        return b.quantity - a.quantity;
      });
  };

  const initializer = counter(lastChampions).map((champion, index) => {
    const imageSrc = getImageSquareCrop(champion.champion);
    return (
      <div key={index} className="flex items-center gap-1 w-fit">
        <div className="champion image w-11 h-11 shadow shadow-black">
          <Image
            src={imageSrc}
            alt="Champion Image"
            width={120}
            height={120}
            style={{ width: "100%", height: "auto", borderRadius: "12%" }}
            unoptimized
            className=""
          />
        </div>
        <div className="champion info flex flex-col text-xs">
          <div>
            <span
              className={`${
                champion.winRate < 50 ? "text-red-600" : "text-green-600"
              } font-bold`}
            >
              {champion.winRate.toFixed(0)}%
            </span>
          </div>
          <div>
            <span className="text-gray-500 text-nowrap">
              ({champion.win}V / {champion.losses}L)
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full flex flex-col gap-4 bg-[#262A3B] p-3 rounded-md shadow-[0px_0px_5px_1px_rgba(17,17,17,1)]">
      <TitleConfig
        title="Last Champions Played"
        className={"tracking-wider text-xl"}
      />
      <div
        className="grid grid-flow-row-dense auto-cols-min auto-rows-min gap-2 items-center justify-center w-full 
      
      grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {initializer}
      </div>
    </div>
  );
}
