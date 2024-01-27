import { patch } from "@/app/utils/@types/patch";
import Image from "next/image";
import React from "react";

interface ChampionPlayedProps {
  championName: string;
  championLevel: number;
}

export default function ChampionPlayed({
  championName,
  championLevel,
}: ChampionPlayedProps) {
  //https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${championName}.png
  return (
    <div className="relative w-fit flex">
      <Image
        className="rounded-full relative overflow-hidden"
        src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/champion/${championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567`}
        alt={`${championName} image`}
        width={48}
        height={48}
        quality={100}
      />
      <span className="flex items-center justify-center bg-neutral-800 rounded-full absolute w-5 h-5 -bottom-1 -right-0.5 text-xs">
        {championLevel}
      </span>
    </div>
  );
}