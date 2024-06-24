import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

type ChampionMasteryImgProps = {
  championName: string;
};

export default function ChampionMasteryImg({
  championName,
}: ChampionMasteryImgProps) {
  return (
    <div className="flex items-center w-20 h-fit">
      <Image
        className="rounded-md"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${championName}.png`}
        alt="Champion image"
        width={70}
        height={70}
        unoptimized
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
