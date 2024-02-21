import { MatchInfo, Participant } from "@/app/utils/@types/summonerMatches";
import {
  calcularDiferencaTempo,
  secondsToMinutes,
} from "@/app/utils/formatters/timeCalculators";
import { queueTypeEnum } from "@/app/utils/queueTypeEnum";
import React from "react";

interface MatchInfoProps {
  matchInfo: MatchInfo;
  userDataByMatch: Participant;
}

export default function MatchInfo({
  matchInfo,
  userDataByMatch,
}: MatchInfoProps) {
  const endGameDate = calcularDiferencaTempo(matchInfo.gameEndTimestamp);
  const queueType = queueTypeEnum[matchInfo.queueId];
  return (
    <div className="flex items-center justify-evenly border-b border-neutral-800">
      <span
        className={`queue-type text-sm text ${
          userDataByMatch.win ? "text-lime-500" : "text-red-500"
        } font-bold`}
      >
        {queueType}
      </span>

      <span className="game-time text-xs text-neutral-400 font-medium">
        {endGameDate.difference} {endGameDate.unit} ago
      </span>

      <div className="game-result flex items-center gap-2 text-xs text-neutral-400 font-medium">
        <span className={`${userDataByMatch.win} font-medium`}>
          {userDataByMatch.win ? "Victory" : "Defeat"}
        </span>
        <span>{secondsToMinutes(matchInfo.gameDuration)}</span>
      </div>
    </div>
  );
}
