import { Challenges } from "@/app/utils/@types/summonerMatches";
import { calculateFarmPerMin } from "@/app/utils/formatters/calculateFarmPerMin";
import React from "react";

interface MatchSummonerExtraDataProps {
  challenges: Challenges;
  visionScore: number;
  totalFarm: number;
  totalDamage: number;
  className: string;
}

export default function MatchSummonerExtraData({
  challenges,
  visionScore,
  totalFarm,
  totalDamage,
  className,
}: MatchSummonerExtraDataProps) {
  const killParticipationPerCent = (killParticipation: number) => {
    return `${(killParticipation * 100).toFixed(0)}%`;
  };

  return (
    <div
      className={` ${className} flex flex-col relative w-full lg:w-1/2 items-center justify-center
      `}
    >
      <div className="w-fit">
        <span className="text-sm font-medium text-neutral-300 fit-content">
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
