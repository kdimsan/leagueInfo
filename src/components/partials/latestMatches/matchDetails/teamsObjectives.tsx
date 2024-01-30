import { Objectives } from "@/app/utils/@types/summonerMatches";
import Baron from "@/images/baron";
import Dragon from "@/images/dragon";
import Inibidor from "@/images/inibidor";
import RiftHerald from "@/images/riftHerald";
import Tower from "@/images/tower";
import Horde from "@/images/horde";

import React from "react";

interface TeamsObjectivesProps {
  teamObjectives: Objectives[];
}

interface SVGComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const svgComponents: SVGComponents = {
  Baron: Baron,
  Dragon: Dragon,
  Inibidor: Inibidor,
  RiftHerald: RiftHerald,
  Tower: Tower,
  Horde: Horde,
};
export default function TeamsObjectives({
  teamObjectives,
}: TeamsObjectivesProps) {
  return (
    <ul>
      {teamObjectives.map((objective, index) => {
        const SVGComponent = svgComponents[objective.name];

        if (!SVGComponent) {
          return (
            <li key={index}>
              <span>{objective.name}</span>
              <span>{objective.kills}</span>
            </li>
          );
        }
        return (
          <li key={index}>
            <SVGComponent />
            <div>
              <span>{objective.name}</span>
              <span>{objective.kills}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
