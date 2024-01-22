import { lastTimePlayedConverter } from "@/app/utils/formatters/lastTimeConverter";
import useUserData from "@/hooks/useUserData";
import React from "react";

export default function SummonerLatestMatches() {
  const { userData } = useUserData();
  const data = userData?.summonerLatestMatchesData;

  const secondsToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinuts = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinuts}:${formattedSeconds}`;
  };

  return (
    <div>
      {data &&
        data.map((matchData) => (
          <div key={matchData.matchInfo.gameId} className="card">
            <div>
              <span>Game Mode: {matchData.matchInfo.gameMode}</span>
              <span>
                Game Duration:{" "}
                {secondsToMinutes(matchData.matchInfo.gameDuration)}
              </span>
            </div>
            <div>
              {matchData.matchInfo.participants.map((participant) => (
                <div key={participant.summonerId}>
                  <span>
                    Name: {participant.riotIdGameName}{" "}
                    {participant.riotIdTagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
