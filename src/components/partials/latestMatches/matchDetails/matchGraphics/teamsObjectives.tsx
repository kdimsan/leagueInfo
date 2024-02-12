import { MatchInfo, Objectives } from "@/app/utils/@types/summonerMatches";
import Baron from "@/images/baron";
import Dragon from "@/images/dragon";
import Inhibitor from "@/images/Inhibitor";
import RiftHerald from "@/images/riftHerald";
import Tower from "@/images/tower";
import Horde from "@/images/horde";
import Champion from "@/images/champion";

import React from "react";
import TeamGraphics from "./teamGraphics";

interface TeamsObjectivesProps {
  matchDetails: MatchInfo;
}

interface SVGComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const svgComponents: SVGComponents = {
  Baron: Baron,
  Dragon: Dragon,
  Inhibitor: Inhibitor,
  Rift_Herald: RiftHerald,
  Tower: Tower,
  Horde: Horde,
};
export default function TeamsObjectives({
  matchDetails,
}: TeamsObjectivesProps) {
  const teamData = matchDetails.teams.map((team) => {
    const teamObjectives = team.objectives.map((objectives) => {
      return {
        teamID: team.teamId,
        objective: objectives.name,
        value: objectives.kills,
      };
    });
    return teamObjectives;
  });

  const blueTeamData = teamData[0];
  const redTeamData = teamData[1];

  return (
    <ul className="container">
      <TeamGraphics
        matchDetails={matchDetails}
        title={"Champion Kills"}
        blueTeamData={blueTeamData[1]}
        redTeamData={redTeamData[1]}
      />
    </ul>
  );
}
