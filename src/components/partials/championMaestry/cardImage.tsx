import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

type ChampionMaestryImgProps = {
  championName: string;
};

export default function ChampionMaestryImg({
  championName,
}: ChampionMaestryImgProps) {
  return (
    <div className="flex items-center w-16 h-fit sm:w-fit">
      <Image
        className="rounded-md"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${championName}.png`}
        alt="Champion image"
        width={80}
        height={70}
        quality={100}
      />
    </div>
  );
}
