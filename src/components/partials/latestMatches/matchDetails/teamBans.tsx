import React from "react";
import { ChampionBase } from "./../../../../app/utils/@types/champions";
import Image from "next/image";
import Champion from "@/images/champion";

interface TeamBansProps {
  championsBans: ChampionBase[];
}

export default function TeamBans({ championsBans }: TeamBansProps) {
  return (
    <div className="flex justify-center items-center gap-1">
      <span className="text-sm font-semibold text-neutral-400">Bans: </span>
      {championsBans.map((championBan) => (
        <div className="flex items-center" key={championBan.championId}>
          {championBan.championKey === -1 ? (
            <div className="flex items-center justify-center bg-zinc-800 w-5 h-5 rounded">
              <Champion color={"#b58e39"} />
            </div>
          ) : (
            <Image
              className="rounded-md"
              alt="Champion square art."
              width={20}
              height={20}
              src={`https://opgg-static.akamaized.net/meta/images/lol/14.2.1/champion/${championBan.championId}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
