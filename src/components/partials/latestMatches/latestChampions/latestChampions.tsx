import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import TitleConfig from "@/components/titleConfig";
import useUserData from "@/hooks/useUserData";
import Image from "next/image";
import React from "react";

interface LatestChampionsProps {
  champion: string;
  win: boolean;
}

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
      .sort((a, b) => b.winRate - a.winRate);
  };

  const initializer = counter(lastChampions).map((champion, index) => {
    return (
      <div key={index} className="flex items-center gap-1 w-fit xl">
        <div className="champion image w-12 h-auto">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champion.champion}.png`}
            alt="Champion Image"
            width={120}
            height={120}
            style={{ width: "100%", height: "auto", borderRadius: "15%" }}
            quality={100}
          />
        </div>
        <div className="champion info flex gap-1 text-xs">
          <div>
            <span
              className={`${
                champion.winRate < 50 ? "text-red-600" : "text-green-600"
              } font-medium`}
            >
              {champion.winRate}%
            </span>
          </div>
          <div>
            <span className="text-gray-500">
              ({champion.win}V / {champion.losses}L)
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full">
      <TitleConfig
        title="Last Champions Played"
        className={"tracking-wider text-xl lg:text-2xl"}
      />
      <div
        className="grid grid-flow-row-dense auto-cols-min auto-rows-min gap-2 items-center justify-center w-full 
      bg-[#262A3B] p-3 rounded-md shadow-[0px_0px_5px_1px_rgba(17,17,17,1)]
      grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {initializer}
      </div>
    </div>
  );
}
