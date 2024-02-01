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
        team.teamId === 100 ? (
          <div className={`py-2 bg-blue-team`} key={team.teamId}>
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
              className={`py-2 rounded-b-md bg-red-team
              `}
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
