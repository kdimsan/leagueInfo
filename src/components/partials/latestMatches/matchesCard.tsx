import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import React, { useState } from "react";
import MatchInfo from "./matchInfo";
import MatchSearchUserInfos from "./matchSearchUserInfos";
import MatchPlayers from "./matchPlayers";
import MatchDetailsCard from "./matchDetails/matchDetailsCard";

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
    <div onClick={() => setMatchDetailsStatus(!matchDetailsStatus)}>
      <div
        className={`card-container flex justify-between gap-4 px-4 py-3 rounded-lg 
        ${matchDetailsStatus ? "rounded-b-none" : ""}
        ${userDataByMatch.win ? "bg-green-800" : "bg-red-800"}`}
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
