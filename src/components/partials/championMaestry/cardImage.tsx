import { patch } from "@/app/utils/patch";
import React from "react";

type ChampionMaestryImgProps = {
  championName: string;
};

export default function ChampionMaestryImg({
  championName,
}: ChampionMaestryImgProps) {
  return (
    <div className="flex items-center">
      <img
        className="h-20 rounded-md"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${championName}.png`}
        alt="Champion image"
        width={112}
      />
    </div>
  );
}
