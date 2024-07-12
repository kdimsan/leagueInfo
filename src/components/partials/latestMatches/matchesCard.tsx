import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import React, { useState } from "react";
import MatchInfo from "./matchInfo";
import MatchSummonerInfos from "./matchSummonerInfos";
import MatchPlayers from "./matchPlayers";
import MatchDetailsCard from "./matchDetails";
import MatchSummonerExtraData from "./matchSummonerExtraData";
import { findSummoner } from "@/app/utils/functions/findSummoner";

interface MatchCardData {
  matchData: SummonerLatestMatchesProps;
  searchUserPuuid: string;
}

export default function MatchesCard({
  matchData,
  searchUserPuuid,
}: MatchCardData) {
  const participantsArray = matchData.matchInfo.participantsData;
  const [matchDetailsStatus, setMatchDetailsStatus] = useState(false);

  const userDataByMatch = findSummoner(participantsArray, searchUserPuuid);

  return (
    <div className="w-full">
      <div
        onClick={() => setMatchDetailsStatus(!matchDetailsStatus)}
        className={`card-container p-0.5 rounded-3xl 
        ${matchDetailsStatus ? "rounded-b-none" : ""}
        ${
          userDataByMatch.win
            ? "bg-gradient-to-b from-match-card-green-light to-transparent"
            : "bg-gradient-to-b from-match-card-red-light to-transparent"
        }`}
      >
        <div
          className={`flex flex-col gap-4 p-2 rounded-[calc(1.5rem-2px)] 
        ${
          userDataByMatch.win
            ? "bg-gradient-to-b from-match-card-green-dark to-transparent"
            : "bg-gradient-to-b from-match-card-red-dark to-transparent"
        }`}
        >
          <MatchInfo
            userDataByMatch={userDataByMatch}
            matchInfo={matchData.matchInfo}
          />
          <div className="flex flex-wrap items-start justify-center w-full gap-4">
            <div className="flex flex-col items-center sm:flex-row sm:items-start justify-around w-full lg:w-2/3">
              <MatchSummonerInfos matchUserInfo={userDataByMatch} />
              <MatchSummonerExtraData
                className="w-full lg:w-1/2 items-center"
                challenges={userDataByMatch.challenges}
                visionScore={userDataByMatch.visionScore}
                totalFarm={userDataByMatch.totalFarm}
                totalDamage={userDataByMatch.totalDamageDealtToChampions}
              />
            </div>
            <MatchPlayers
              participantsByMatchInfo={participantsArray}
              searchUserPuiid={userDataByMatch.puuid}
            />
          </div>
        </div>
      </div>
      {matchDetailsStatus && (
        <div>
          <MatchDetailsCard matchDetails={matchData.matchInfo} />
        </div>
      )}
    </div>
  );
}
