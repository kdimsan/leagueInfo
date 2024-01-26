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
  return (
    <div className="content">
      <div className="w-fit flex gap-2">
        <ChampionPlayed
          championName={matchUserInfo.championName}
          championLevel={matchUserInfo.champLevel}
        />
        <SummonerPerks
          spell1={matchUserInfo.summonerSpell1}
          spell2={matchUserInfo.summonerSpell2}
          runes={matchUserInfo.perks}
        />
      </div>
      <div className="items mt-2">
        <SummonerItems userItems={matchUserInfo.items} />
      </div>
    </div>
  );
}
