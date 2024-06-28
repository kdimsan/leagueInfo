import { ChampionPassive, SpellsProps } from "@/app/utils/@types/champions";
import React from "react";
import ChampionVideo from "../../championVideo/championVideo";

interface SpellDescriptionProps {
  button: string;
  spell?: SpellsProps;
  passive?: ChampionPassive;
  championKey: string;
}

const SpellDesc = ({
  title,
  desc,
  passive,
}: {
  title: string;
  desc: string;
  passive?: string;
}) => (
  <div
    className={`flex gap-2 ${
      title === "Description" ? "flex-col !gap-0" : "flex-row"
    }`}
  >
    <span className="text-gray-300 italic">{title}:</span>
    <span className="font-semibold">{desc ? desc : "-"}</span>
    <span>{passive}</span>
  </div>
);

export default function SpellDescription({
  spell,
  passive,
  championKey,
  button,
}: SpellDescriptionProps) {
  return (
    <div
      className={`flex flex-col w-full gap-3 bg-neutral-900 border border-custom-pallete-cyan-700 z-[10000] p-2 mt-2 text-white 
        rounded-md text-sm
    `}
    >
      {spell && (
        <div className="flex flex-wrap gap-3">
          <SpellDesc
            desc={spell && spell?.name}
            title={"Name"}
            passive={passive?.name}
          />

          <SpellDesc
            desc={spell && spell?.cooldownBurn}
            title={"Cooldown(seconds)"}
          />
          <SpellDesc desc={spell && spell?.costBurn} title={"Cost"} />
          <SpellDesc desc={spell && spell?.rangeBurn} title={"Range"} />

          <div className="desc flex flex-col">
            <SpellDesc
              desc={spell && spell?.description}
              title={"Description"}
              passive={passive?.description}
            />
          </div>
        </div>
      )}
      <ChampionVideo skillButton={button} championKey={championKey} />
    </div>
  );
}
