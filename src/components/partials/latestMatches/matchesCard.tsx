import {
  Participant,
  SummonerLatestMatchesProps,
} from "@/app/utils/@types/summonerMatches";
import React from "react";
import MatchInfo from "./matchInfo";
import MatchSummonerInfos from "./matchSummonerInfos";

interface MatchCardData {
  matchData: SummonerLatestMatchesProps;
  searchUserPuiid: string;
}

export default function MatchesCard({
  matchData,
  searchUserPuiid,
}: MatchCardData) {
  const matchInfo = matchData.matchInfo.participantsData;

  const userDataByMatch = matchInfo.filter(
    (userPuiid) => userPuiid.puuid === searchUserPuiid
  )[0];

  return (
    <div
      className={`card-container flex ${
        userDataByMatch.win ? "bg-green-800" : "bg-red-800"
      } px-4 py-3 rounded-lg`}
    >
      <div className="content flex">
        <MatchInfo
          userDataByMatch={userDataByMatch}
          matchInfo={matchData.matchInfo}
        />
        <MatchSummonerInfos matchUserInfo={userDataByMatch} />
      </div>
    </div>
  );
}
