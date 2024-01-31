import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import React from "react";

import TeamsObjectives from "./teamsObjectives";
import MatchResume from "./matchResume";
import MatchDetailsTable from "./matchDetailsTable";

interface MatchDetailsCardProps {
  matchDetails: MatchInfo;
}

//matchSummonersInfos

export default function MatchDetailsCard({
  matchDetails,
}: MatchDetailsCardProps) {
  return (
    <div className="card-details w-full justify-between">
      {matchDetails.teams.map((team) =>
        team.win ? (
          <div
            className={`p-3 ${
              team.teamId === 100 ? "bg-blue-900" : "bg-red-800"
            }`}
            key={team.teamId}
          >
            <MatchResume team={team} />
            <MatchDetailsTable />
          </div>
        ) : (
          <div key={team.teamId}>
            {/* <div className="match-graphs">
              {matchDetails.participantsData.map(
                (participant) => participant.riotIdGameName
              )}
            </div> */}
            <div
              className={`p-3 ${
                team.teamId === 100 ? "bg-blue-900" : "bg-red-800"
              }`}
            >
              <MatchResume team={team} />
            </div>
          </div>
        )
      )}
    </div>
  );
}
