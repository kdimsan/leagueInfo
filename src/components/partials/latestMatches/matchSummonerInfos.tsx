import { Participant } from "@/app/utils/@types/summonerMatches";
import React from "react";
import ChampionPlayed from "./championPlayed";
import SummonerPerks from "./summonerPerks";
import SummonerItems from "./summonerItems";
import SummonerMatchFrag from "./summonerMatchFrag";
import MatchSummonerExtraData from "./matchSummonerExtraData";

interface MatchSummonerInfosProps {
  matchUserInfo: Participant;
}

export default function MatchSummonerInfos({
  matchUserInfo,
}: MatchSummonerInfosProps) {
  return (
    <div className="">
      <div className="w-fit h-fit flex justify-center items-center gap-2">
        <ChampionPlayed
          championName={matchUserInfo.championName}
          championLevel={matchUserInfo.champLevel}
        />
        <SummonerPerks
          spell1={matchUserInfo.summonerSpell1}
          spell2={matchUserInfo.summonerSpell2}
          runes={matchUserInfo.perks}
        />
        <SummonerMatchFrag
          kills={matchUserInfo.kills}
          assists={matchUserInfo.assists}
          deaths={matchUserInfo.deaths}
          kda={matchUserInfo.challenges.kda}
        />
        <MatchSummonerExtraData
          challenges={matchUserInfo.challenges}
          visionScore={matchUserInfo.visionScore}
          minionsFarm={matchUserInfo.totalMinionsKilled}
          neutralMonsterFarm={matchUserInfo.neutralMinionsKilled}
          totalDamage={matchUserInfo.totalDamageDealtToChampions}
        />
      </div>
      <div className="items mt-2 w-fit">
        <SummonerItems userItems={matchUserInfo.items} />
      </div>
    </div>
  );
}
