"use client";
import { ChampionPassive, SpellsProps } from "@/app/utils/@types/champions";
import Image from "next/image";
import React, { useState } from "react";
import SpellDescription from "./spellDescription";

interface ChampionSpellsProps {
  championSpells: SpellsProps[];
  championPassive: ChampionPassive;
}

export default function ChampionSpells({
  championSpells,
  championPassive,
}: ChampionSpellsProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const spellsCommands = ["Q", "W", "E", "R"];

  const mapSpellsWithButtons = (spells: SpellsProps[]) => {
    return spells.map((spell, index) => {
      const button = spellsCommands[index];

      return { ...spell, button: button };
    });
  };
  const mappedSpellsWithCommands = mapSpellsWithButtons(championSpells);

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold lg: text-lg">
        <h3>Spells</h3>
      </div>
      <div className="flex gap-1">
        <div className="passive">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(championPassive.name)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Image
              width={40}
              height={40}
              src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/${championPassive.image.full}`}
              alt={`champion passive`}
              unoptimized
            />
            <div className="absolute left-0 top-0 rounded-full bg-costum-blue-950 w-4 h-4 border border-costum-pallete-cyan-700">
              <div className="flex items-center justify-center text-[10px]">
                P
              </div>
            </div>
            {isHovered && isHovered === championPassive.name && (
              <SpellDescription passive={championPassive} />
            )}
          </div>
        </div>

        <div className="spells flex gap-1">
          {mappedSpellsWithCommands.map((spell, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setIsHovered(spell.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Image
                width={40}
                height={40}
                src={`https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/${spell.image.full}`}
                alt={`champion skill`}
                unoptimized
              />
              <div className="cast-button absolute top-0 left-0 rounded-full border border-costum-pallete-cyan-700 bg-costum-blue-950 w-4 h-4">
                <div className="flex items-center justify-center text-[10px]">
                  {spell.button}
                </div>
              </div>
              {isHovered && isHovered === spell.id && (
                <SpellDescription spell={spell} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
