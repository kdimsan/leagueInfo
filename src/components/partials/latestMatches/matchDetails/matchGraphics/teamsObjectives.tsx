import { MatchInfo, Objectives } from "@/app/utils/@types/summonerMatches";
import Baron from "@/images/baron";
import Dragon from "@/images/dragon";
import Inhibitor from "@/images/Inhibitor";
import RiftHerald from "@/images/riftHerald";
import Tower from "@/images/tower";
import Horde from "@/images/horde";
import Champion from "@/images/champion";

import React from "react";
import TeamKills from "./teamKills";

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
export default function TeamsObjectives({matchDetails}: TeamsObjectivesProps) {
  return (
    <ul className="container">
      <TeamKills matchDetails={matchDetails}  />
    </ul>
  );
}
