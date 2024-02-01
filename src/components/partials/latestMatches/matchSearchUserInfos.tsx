import { Participant } from "@/app/utils/@types/summonerMatches";
import React from "react";
import ChampionPlayed from "./championPlayed";
import SummonerPerks from "./summonerPerks";
import SummonerItems from "./summonerItems";
import SummonerMatchFrag from "./summonerMatchFrag";
import MatchSummonerExtraData from "./matchSummonerExtraData";

interface MatchSearchUserInfosProps {
  matchUserInfo: Participant;
}

export default function MatchSearchUserInfos({
  matchUserInfo,
}: MatchSearchUserInfosProps) {
  return (
    <div className="">
      <div className="w-fit h-fit flex justify-center items-center gap-2">
        <ChampionPlayed
          width={48}
          height={48}
          championName={matchUserInfo.championName}
          championLevel={matchUserInfo.champLevel}
        />
        <SummonerPerks
          spell1={matchUserInfo.summonerSpell1}
          spell2={matchUserInfo.summonerSpell2}
          runes={matchUserInfo.perks}
          width={24}
          height={24}
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
          totalFarm={matchUserInfo.totalFarm}
          totalDamage={matchUserInfo.totalDamageDealtToChampions}
        />
      </div>
      <div className="items mt-2 w-fit">
        <SummonerItems userItems={matchUserInfo.items} />
      </div>
    </div>
  );
}
