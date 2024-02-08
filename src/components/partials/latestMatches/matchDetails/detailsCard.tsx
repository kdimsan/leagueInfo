import React from "react";
import MatchResume from "./matchResume";
import MatchDetailsTable from "./matchDetailsTable";
import { MatchInfo, Team } from "@/app/utils/@types/summonerMatches";

interface DetailsCardProps {
  team: Team;
  matchDetails: MatchInfo;
}

export default function DetailsCard({ team, matchDetails }: DetailsCardProps) {
  return (
    <div key={team.teamId}>
      {team.teamId === 100 ? (
        <div className={`py-2 bg-blue-team brightness-125`} key={team.teamId}>
          <MatchResume team={team} />
          <MatchDetailsTable
            participants={matchDetails.participantsData}
            participantTeam={team.teamId}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
}
