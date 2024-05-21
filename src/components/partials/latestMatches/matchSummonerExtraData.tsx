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
      className={` ${className} flex flex-col relative w-full lg:w-1/3 items-center justify-center
      sm:after:content[''] sm:after:w-0.5 sm:after:h-full sm:after:absolute  sm:after:bg-neutral-800 sm:after:-left-3 sm:after:top-0`}
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
