import { SummonerLatestMatchesProps } from "@/app/utils/@types/summonerMatches";
import React from "react";
import MatchInfo from "./matchInfo";
import MatchSummonerInfos from "./matchSummonerInfos";
import MatchPlayers from "./matchPlayers";

interface MatchCardData {
  matchData: SummonerLatestMatchesProps;
  searchUserPuiid: string;
}

export default function MatchesCard({
  matchData,
  searchUserPuiid,
}: MatchCardData) {
  const participantsArray = matchData.matchInfo.participantsData;

  const userDataByMatch = participantsArray.filter(
    (userPuiid) => userPuiid.puuid === searchUserPuiid
  )[0];

  return (
    <div
      className={`card-container flex justify-between ${
        userDataByMatch.win ? "bg-green-800" : "bg-red-800"
      } px-4 py-3 rounded-lg`}
    >
      <div className="card-content flex items-center justify-center">
        <MatchInfo
          userDataByMatch={userDataByMatch}
          matchInfo={matchData.matchInfo}
        />
      </div>
      <div className="flex items-center">
        <MatchSummonerInfos matchUserInfo={userDataByMatch} />
      </div>
      <div>
        <MatchPlayers
          participantsByMatchInfo={participantsArray}
          searchUserPuiid={userDataByMatch.puuid}
        />
      </div>
    </div>
  );
}
