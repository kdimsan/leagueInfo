import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import React, { useState } from "react";
import MatchInfo from "./matchInfo";
import MatchSearchUserInfos from "./matchSearchUserInfos";
import MatchPlayers from "./matchPlayers";
import MatchDetailsCard from "./matchDetails";

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
        className={`card-container flex justify-between gap-4 px-4 py-3 rounded-lg 
        ${matchDetailsStatus ? "rounded-b-none" : ""}
        ${
          userDataByMatch.win
            ? "bg-gradient-to-b from-match-card-green-dark to-match-card-green-light"
            : "bg-gradient-to-b from-match-card-red-dark to-match-card-red-light"
        }`}
      >
        <div className="card-content flex items-center justify-center">
          <MatchInfo
            userDataByMatch={userDataByMatch}
            matchInfo={matchData.matchInfo}
          />
        </div>
        <div className="flex items-center">
          <MatchSearchUserInfos matchUserInfo={userDataByMatch} />
        </div>
        <div>
          <MatchPlayers
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
