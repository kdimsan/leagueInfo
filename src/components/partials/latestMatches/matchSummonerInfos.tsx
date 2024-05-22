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
    <div
      className="w-full lg:w-1/2 flex flex-col items-center relative
      sm:after:content[''] sm:after:w-0.5 sm:after:h-full sm:after:absolute sm:after:bg-neutral-800 sm:after:-right-1 sm:after:top-0"
    >
      <div className="w-fit flex justify-center items-center gap-2">
        <ChampionPlayed
          width={48}
          height={48}
          championName={matchUserInfo.championName}
          championLevel={matchUserInfo.champLevel}
        />
        <div className="flex items-center gap-1 xl:flex-row">
          <SummonerPerks
            spell1={matchUserInfo.summonerSpell1}
            spell2={matchUserInfo.summonerSpell2}
            runes={matchUserInfo.perks}
            width={22}
            height={22}
          />
          <SummonerMatchFrag
            kills={matchUserInfo.kills}
            assists={matchUserInfo.assists}
            deaths={matchUserInfo.deaths}
            kda={matchUserInfo.challenges.kda}
          />
        </div>
      </div>
      <SummonerItems userItems={matchUserInfo.items} />
    </div>
  );
}
