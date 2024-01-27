import { patch } from "@/app/utils/@types/patch";
import { Runes } from "@/app/utils/@types/summonerMatches";
import { spellsEnum } from "@/app/utils/summonerSpellsEnum";
import Image from "next/image";
import React from "react";

interface SummonerPerksProps {
  spell1: number;
  spell2: number;
  runes: Runes;
}

export default function SummonerPerks({
  spell1,
  spell2,
  runes,
}: SummonerPerksProps) {
  const summonerSpell = [spellsEnum[spell1], spellsEnum[spell2]];

  return (
    <div className="flex flex-col gap-2 w-fit mt-2">
      <div className="flex gap-1">
        {summonerSpell.map((spell, index) => (
          <Image
            key={index}
            className="rounded"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${spell}.png`}
            width={22}
            height={22}
            alt={`summoner spell ${spell}`}
          />
        ))}
      </div>
      <div className="flex gap-1">
        <Image
          className="flex justify-center items-center bg-neutral-800 rounded-full"
          src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/perk/${runes.mainRune}.png?image=q_auto,f_webp,w_64,h_64&v=1705466001567`}
          width={22}
          height={22}
          alt="Summoner Rune"
        />

        <Image
          className="flex justify-center items-center bg-neutral-800 rounded-full p-0.5"
          src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/perkStyle/${runes.secondaryRuneStyle}.png?image=q_auto,f_webp,w_64,h_64&v=1705466001567`}
          width={22}
          height={22}
          alt="Summoner Rune Style"
        />
      </div>
    </div>
  );
}