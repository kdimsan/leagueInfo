import { Objectives } from "@/app/utils/@types/summonerMatches";
import Baron from "@/images/baron";
import Dragon from "@/images/dragon";
import Inhibitor from "@/images/Inhibitor";
import RiftHerald from "@/images/riftHerald";
import Tower from "@/images/tower";
import Horde from "@/images/horde";
import Champion from "@/images/champion";

import React from "react";

interface TeamsObjectivesProps {
  teamObjectives: Objectives[];
}

interface SVGComponents {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const svgComponents: SVGComponents = {
  Baron: Baron,
  Champion: Champion,
  Dragon: Dragon,
  Inhibitor: Inhibitor,
  Rift_Herald: RiftHerald,
  Tower: Tower,
  Horde: Horde,
};
export default function TeamsObjectives({
  teamObjectives,
}: TeamsObjectivesProps) {
  return (
    <ul className="grid grid-cols-3 w-fit">
      {teamObjectives.map((objective, index) => {
        const SVGComponent = svgComponents[objective.name];

        if (!SVGComponent) {
          return (
            <li key={index}>
              <span>{objective.name.replace("_", " ")}</span>
              <span>{objective.kills}</span>
            </li>
          );
        }
        return (
          <li className="flex items-center gap-1" key={index}>
            <SVGComponent />
            <div>
              <span>{objective.kills}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
