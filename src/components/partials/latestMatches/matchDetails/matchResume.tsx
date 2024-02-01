import React from "react";
import TeamBans from "./teamBans";
import { Team } from "@/app/utils/@types/summonerMatches";

interface MatchResumeProps {
  team: Team;
}

export default function MatchResume({ team }: MatchResumeProps) {
  return (
    <div
      className={`upper-part flex items-center px-3 py-1 justify-between border-b-2 border-neutral-800`}
    >
      <div className={`flex items-center gap-1`}>
        <span
          className={` text-sm font-bold ${
            team.win ? "text-green-500" : "text-red-500"
          }`}
        >
          {team.win ? "Victory" : "Defeated"}{" "}
        </span>
        <span className="text-xs font-medium text-neutral-400">
          {team.teamId === 100 ? "(Blue Team)" : "(Red Team)"}
        </span>
      </div>

      {team.bans && team.bans.length != 0 && (
        <TeamBans championsBans={team.bans} />
      )}
    </div>
  );
}
