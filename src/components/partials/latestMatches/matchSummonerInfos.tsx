import { Participant } from "@/app/utils/@types/summonerMatches";
import React from "react";
import ChampionPlayed from "./championPlayed";
import SummonerPerks from "./summonerPerks";
import SummonerItems from "./summonerItems";

interface MatchSummonerInfosProps {
  matchUserInfo: Participant;
}

export default function MatchSummonerInfos({
  matchUserInfo,
}: MatchSummonerInfosProps) {
  const userItems: number[] = [];

  for (const key in matchUserInfo) {
    if (key.startsWith("item") && Number.isInteger(Number(key.slice(4)))) {
      userItems.push(Number(matchUserInfo[key as keyof Participant]));
    }
  }

  return (
    <div className="content">
      <div className="w-fit flex gap-2">
        <ChampionPlayed
          championName={matchUserInfo.championName}
          championLevel={matchUserInfo.champLevel}
        />
        <SummonerPerks
          spell1={matchUserInfo.summoner1Id}
          spell2={matchUserInfo.summoner2Id}
        />
      </div>
      <div className="items mt-2">
        <SummonerItems userItems={userItems} />
      </div>
    </div>
  );
}
