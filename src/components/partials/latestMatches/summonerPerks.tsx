import { patch } from "@/app/utils/patch";
import { Runes } from "@/app/utils/@types/summonerMatches";
import { spellsEnum } from "@/app/utils/summonerSpellsEnum";
import Image from "next/image";
import React from "react";

interface SummonerPerksProps {
  spell1: number;
  spell2: number;
  runes: Runes;
  width: number;
  height: number;
}

export default function SummonerPerks({
  spell1,
  spell2,
  runes,
  width,
  height,
}: SummonerPerksProps) {
  const summonerSpell = [spellsEnum[spell1], spellsEnum[spell2]];

  return (
    <div className="flex flex-col gap-1 w-fit mt-2">
      <div className="flex gap-1">
        {summonerSpell.map((spell, index) => (
          <Image
            key={index}
            className="rounded"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${spell}.png`}
            width={width}
            height={22}
            alt={`summoner spell ${spell}`}
            unoptimized
          />
        ))}
      </div>
      <div className={`${runes.mainRune === 0 ? "hidden" : "flex gap-1"}`}>
        <Image
          className="flex justify-center items-center bg-neutral-800 rounded-full"
          src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/perk/${runes.mainRune}.png?image=q_auto,f_webp,w_64,h_64&v=1705466001567`}
          width={width}
          height={height}
          alt="Summoner Rune"
          unoptimized
        />

        <Image
          className="flex justify-center items-center bg-neutral-800 rounded-full p-0.5"
          src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/perkStyle/${runes.secondaryRuneStyle}.png?image=q_auto,f_webp,w_64,h_64&v=1705466001567`}
          width={width}
          height={height}
          alt="Summoner Rune Style"
          unoptimized
        />
      </div>
    </div>
  );
}
