import { ChampionData, SkinsProps } from "@/app/utils/@types/champions";
import Image from "next/image";
import React from "react";

interface ChampionSkinsData {
  championSkins: SkinsProps[];
  championId: string;
}

export default function ChampionSkins({
  championSkins,
  championId,
}: ChampionSkinsData) {
  return (
    <div>
      <h3 className="mt-3 font-semibold text-lg">SKINS</h3>
      {championSkins.map((skins) => (
        <div key={skins.id} className="my-5">
          <img
            className="rounded-md shadow-costum-box-shadow-1"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skins.num}.jpg`}
            alt={`Champion ${championId} skin ${skins.name}`}
          />
          <h4 className="font-semibold">{skins.name}</h4>
        </div>
      ))}

      <div></div>
    </div>
  );
}
