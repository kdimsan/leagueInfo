import { patch } from "@/app/utils/@types/patch";
import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import ChampionImage from "@/components/partials/championImage";
import IndividualGraphics from "@/components/partials/graphics/individualGraphics";
import VersusTeamsGraphics from "@/components/partials/graphics/versusTeamsGraphics";
import Image from "next/image";
import React from "react";

interface TeamGraphicsProps {
  matchDetails: MatchInfo;
  title: string;
  blueTeamData: {
    teamID: number;
    objective: string;
    value: number;
  };
  redTeamData: {
    teamID: number;
    objective: string;
    value: number;
  };
}

export default function TeamGraphics({
  matchDetails,
  title,
  redTeamData,
  blueTeamData,
}: TeamGraphicsProps) {
  const blueTeamParticipants = matchDetails.participantsData.filter(
    (participant) => participant.teamId === 100
  );
  const redTeamParticipants = matchDetails.participantsData.filter(
    (participant) => participant.teamId === 200
  );

  return (
    <li className="flex items-center">
      <div>
        <h4 className="flex items-center justify-center">{title}</h4>
        <div className="w-full flex items-center justify-center">
          <VersusTeamsGraphics
            blueTeamData={blueTeamData.value}
            redTeamData={redTeamData.value}
          />
        </div>
        <div className="flex gap-4 -mt-1">
          <div>
            <div className="w-36 h-32 relative">
              <IndividualGraphics participants={blueTeamParticipants} />
            </div>
          </div>
          <div>
            <div className="w-36 h-32 ">
              <IndividualGraphics participants={redTeamParticipants} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
