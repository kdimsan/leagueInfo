import { Challenges } from "@/app/utils/@types/summonerMatches";
import React from "react";

interface MatchSummonerExtraDataProps {
  challenges: Challenges;
  visionScore: number;
  minionsFarm: number;
  neutralMonsterFarm: number;
  totalDamage: number;
}

export default function MatchSummonerExtraData({
  challenges,
  visionScore,
  minionsFarm,
  neutralMonsterFarm,
  totalDamage,
}: MatchSummonerExtraDataProps) {
  const totalFarm = (
    minionsFarm: number,
    neutralFarm: number,
    gameDuration: number
  ) => {
    const farm = minionsFarm + neutralFarm;
    return `CS ${farm} | (${(farm / (gameDuration / 60)).toFixed(2)})/min`;
  };
  const killParticipationPerCent = (killParticipation: number) => {
    return `${(killParticipation * 100).toFixed(0)}%`;
  };

  return (
    <div className="flex flex-col border-l border-neutral-800 ml-3">
      <div className="ml-3">
        <span className="text-sm font-medium text-neutral-300">
          {killParticipationPerCent(challenges.killParticipation)} kill
          participation
        </span>
      </div>
      <div className="flex flex-col text-sm ml-3 text-neutral-400 leading-tight">
        <span>
          {totalFarm(minionsFarm, neutralMonsterFarm, challenges.gameLength)}
        </span>
        {visionScore === 0 ? (
          <span>Total Dmg {totalDamage}</span>
        ) : (
          <span>{visionScore} Vision Score</span>
        )}
      </div>
    </div>
  );
}
