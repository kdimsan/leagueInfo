"use client";
import {
  ChampionPassive,
  SpellsProps,
  SpellsPropsWithButton,
} from "@/app/utils/@types/champions";
import Image from "next/image";
import React, { useState } from "react";
import SpellDescription from "./spellDescription";
import ChampionVideo from "../../championVideo/championVideo";
import { patch } from "@/app/utils/patch";
import SubTitle from "../../subTitle/subTitle";

interface ChampionSpellsProps {
  championSpells: SpellsProps[];
  championKey: string;
}

export default function ChampionSpells({
  championSpells,
  championKey,
}: ChampionSpellsProps) {
  const spellsCommands = ["P", "Q", "W", "E", "R"];
  const mapSpellsWithButtons = (spells: SpellsProps[]) => {
    return spells.map((spell, index) => {
      const button = spellsCommands[index];

      return { ...spell, button: button };
    });
  };
  const mappedSpellsWithCommands = mapSpellsWithButtons(championSpells);
  const [selectedSpell, setSelectedSpell] = useState<SpellsPropsWithButton>(
    mappedSpellsWithCommands[1]
  );

  const SpellSquare = ({
    key,
    spell,
    group,
  }: {
    key?: number;
    spell?: SpellsPropsWithButton;
    group: string;
  }) => (
    <div
      className={`flex flex-col z-10 relative cursor-pointer ${
        selectedSpell?.name === spell?.name
          ? "after:content[''] after:absolute after:-bottom-1 after:right-0 after:-translate-x-1/2 after:w-6 after:h-6 after:rounded-[2px] after:bg-custom-pallete-cyan-600 after:rotate-45 after:-z-10"
          : ""
      }
    `}
    >
      <div
        key={key}
        className="spell-square relative"
        onClick={() => setSelectedSpell(spell!)}
      >
        <Image
          width={50}
          height={50}
          src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/${group}/${spell?.image.full}`}
          alt={`champion skill`}
          unoptimized
          className="rounded shadow-[0px_1px_3px_2px_rgba(0,0,0,0.6)]"
        />
        <div className="cast-button absolute top-0 left-0 rounded-full border border-custom-pallete-cyan-700 bg-custom-blue-950 w-4 h-4">
          <div className="flex items-center justify-center text-[10px]">
            {spell?.button}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="">
        <SubTitle subTitle="SPELLS" className="text-2xl mt-0" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="skills w-full flex items-center justify-center">
          <div className="spells flex gap-1">
            {mappedSpellsWithCommands.map((spell, index) => (
              <SpellSquare
                spell={spell}
                key={index}
                group={spell.image.group}
              />
            ))}
          </div>
        </div>
        {selectedSpell && (
          <SpellDescription
            spell={selectedSpell}
            championKey={championKey}
            button={selectedSpell.button}
          />
        )}
      </div>
    </div>
  );
}
