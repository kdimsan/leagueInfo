import { patch } from "@/app/utils/@types/patch";
import { spellsEnum } from "@/app/utils/summonerSpellsEnum";
import Image from "next/image";
import React from "react";

interface SummonerPerksProps {
  spell1: number;
  spell2: number;
}

export default function SummonerPerks({ spell1, spell2 }: SummonerPerksProps) {
  const summonerSpell = [spellsEnum[spell2], spellsEnum[spell1]];

  return (
    <div className="flex gap-1 w-fit h-fit">
      {summonerSpell.map((spell, index) => (
        <div key={index}>
          <Image
            className="rounded"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${spell}.png`}
            width={22}
            height={22}
            alt={`summoner spell ${spell}`}
          />
        </div>
      ))}
    </div>
  );
}
