import { patch } from "@/app/utils/@types/patch";
import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import ChampionImage from "@/components/partials/championImage";
import IndividualGraphics from "@/components/partials/graphics/individualGraphics";
import Image from "next/image";
import React from "react";

interface TeamKillsProps {
  matchDetails: MatchInfo;
}

export default function TeamKills({ matchDetails }: TeamKillsProps) {
  const blueTeamParticipants = matchDetails.participantsData.filter(
    (participant) => participant.teamId === 100
  );
  const redTeamParticipants = matchDetails.participantsData.filter(
    (participant) => participant.teamId === 200
  );

  return (
    <li className="flex items-center">
      <div>
        <h4 className="flex items-center justify-center">Champions Kills</h4>
        <div className="flex mt-3 gap-4">
          <div>
            <div className="w-32 h-32 relative">
              <IndividualGraphics participants={blueTeamParticipants} />
            </div>
          </div>
          <div>
            <div className="w-32 h-32 ">
              <IndividualGraphics participants={redTeamParticipants} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
