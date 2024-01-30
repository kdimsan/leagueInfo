import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import React from "react";
import TeamBans from "./teamBans";

import TeamsObjectives from "./teamsObjectives";

interface MatchDetailsCardProps {
  matchDetails: MatchInfo;
}

export default function MatchDetailsCard({
  matchDetails,
}: MatchDetailsCardProps) {
  return (
    <div className="teams-card w-full flex justify-between ">
      {matchDetails.teams.map((team) => (
        <div
          className={`w-full ${
            team.teamId === 100 ? "bg-blue-800" : "bg-red-800"
          }`}
          key={team.teamId}
        >
          <div className="flex items-center upper-part">
            <span
              className={`text-sm font-medium ${
                team.win ? "text-green-500" : "text-red-500"
              }`}
            >
              {team.win ? "Victory" : "Defeated"}{" "}
            </span>
            <span className="text-xs font-normal text-neutral-500">
              {team.teamId === 100 ? "(Blue Team)" : "(Red Team)"}
            </span>

            {team.bans && team.bans.length != 0 && (
              <div className="flex">
                <TeamBans championsBans={team.bans} />
              </div>
            )}
          </div>
          <div className="objectives">
            <TeamsObjectives teamObjectives={team.objectives} />
          </div>
          {/* <div>
            <MatchDetailsSummoners/>
          </div> */}
        </div>
      ))}
    </div>
  );
}
