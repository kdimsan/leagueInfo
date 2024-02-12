import React from "react";

import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import TeamsObjectives from "./teamsObjectives";

interface MatchGraphicsProps {
  matchDetails: MatchInfo;
}

export default function MatchGraphics({ matchDetails }: MatchGraphicsProps) {
  return (
    <div className="container flex flex-col bg-neutral-900 p-2">
      <div className="legend w-full flex items-center justify-center gap-5 text-xs">
        <div className="flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-match-details-blue-light brightness-110"></div>
          <span>Blue Team</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-match-card-red-light brightness-110"></div>
          <span>Red Team</span>
        </div>
      </div>
      <div>
        <TeamsObjectives matchDetails={matchDetails} />
      </div>
    </div>
  );
}
