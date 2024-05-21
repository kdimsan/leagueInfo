import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import React, { useState } from "react";
import MatchInfo from "./matchInfo";
import MatchSummonerInfos from "./matchSummonerInfos";
import MatchPlayers from "./matchPlayers";
import MatchDetailsCard from "./matchDetails";
import MatchSummonerExtraData from "./matchSummonerExtraData";

interface MatchCardData {
  matchData: SummonerLatestMatchesProps;
  searchUserPuiid: string;
}

export default function MatchesCard({
  matchData,
  searchUserPuiid,
}: MatchCardData) {
  const participantsArray = matchData.matchInfo.participantsData;
  const [matchDetailsStatus, setMatchDetailsStatus] = useState(false);

  const userDataByMatch = participantsArray.filter(
    (userPuiid) => userPuiid.puuid === searchUserPuiid
  )[0];

  return (
    <div>
      <div
        onClick={() => setMatchDetailsStatus(!matchDetailsStatus)}
        className={`card-container flex flex-col gap-4 px-4 py-3 rounded-lg 
        ${matchDetailsStatus ? "rounded-b-none" : ""}
        ${
          userDataByMatch.win
            ? "bg-gradient-to-b from-match-card-green-dark to-match-card-green-light"
            : "bg-gradient-to-b from-match-card-red-dark to-match-card-red-light"
        }`}
      >
        <MatchInfo
          userDataByMatch={userDataByMatch}
          matchInfo={matchData.matchInfo}
        />
        <div className="flex flex-wrap items-start justify-center w-full gap-4 lg:flex-nowrap lg:gap-0">
          <div className="flex flex-col items-center sm:flex-row sm:items-start w-full gap-4">
            <MatchSummonerInfos matchUserInfo={userDataByMatch} />
            <MatchSummonerExtraData
              className="w-full lg:w-1/3 items-center"
              challenges={userDataByMatch.challenges}
              visionScore={userDataByMatch.visionScore}
              totalFarm={userDataByMatch.totalFarm}
              totalDamage={userDataByMatch.totalDamageDealtToChampions}
            />
          </div>
          <MatchPlayers
            className="lg:w-1/2"
            participantsByMatchInfo={participantsArray}
            searchUserPuiid={userDataByMatch.puuid}
          />
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
