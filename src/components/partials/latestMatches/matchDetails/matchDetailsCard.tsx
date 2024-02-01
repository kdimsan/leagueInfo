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
        //team One
        team.win ? (
          <div
            className={`py-2 ${
              team.teamId === 100 ? "bg-blue-900" : "bg-red-800"
            }`}
            key={team.teamId}
          >
            <MatchResume team={team} />
            <MatchDetailsTable
              participants={matchDetails.participantsData}
              participantTeam={team.teamId}
            />
          </div>
        ) : (
          //Graphics
          <div key={team.teamId}>
            <div
              //Team two
              className={`py-2 rounded-b-md ${
                team.teamId === 100 ? "bg-blue-900" : "bg-red-800"
              }`}
            >
              <MatchResume team={team} />
              <MatchDetailsTable
                participants={matchDetails.participantsData}
                participantTeam={team.teamId}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
