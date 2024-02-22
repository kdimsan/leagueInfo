import { Challenges } from "@/app/utils/@types/summonerMatches";
import { calculateFarmPerMin } from "@/app/utils/formatters/calculateFarmPerMin";
import React from "react";

interface MatchSummonerExtraDataProps {
  challenges: Challenges;
  visionScore: number;
  totalFarm: number;
  totalDamage: number;
}

export default function MatchSummonerExtraData({
  challenges,
  visionScore,
  totalFarm,
  totalDamage,
}: MatchSummonerExtraDataProps) {
  const killParticipationPerCent = (killParticipation: number) => {
    return `${(killParticipation * 100).toFixed(0)}%`;
  };

  return (
    <div className="flex flex-col relative after:content[''] after:w-0.5 after:h-24 after:absolute  after:bg-neutral-800 after:-left-3 after:top-0">
      <div>
        <span className="text-sm font-medium text-neutral-300">
          {killParticipationPerCent(challenges.killParticipation)} kill
          participation
        </span>
      </div>
      <div className="flex flex-col text-sm text-neutral-400 leading-tight">
        <div>
          <span>CS: {totalFarm} </span>
          <span>
            | {calculateFarmPerMin(totalDamage, challenges.gameLength)}/min
          </span>
        </div>
        {visionScore === 0 ? (
          <span>Total Dmg {totalDamage}</span>
        ) : (
          <span>{visionScore} Vision Score</span>
        )}
      </div>
    </div>
  );
}
