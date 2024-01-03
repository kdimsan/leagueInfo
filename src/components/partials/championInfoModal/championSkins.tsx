import { ChampionData } from "@/app/utils/champions";
import React from "react";

interface ChampionSkinsData {
  championData: ChampionData;
  championName: string;
}

export default function ChampionSkins({
  championData,
  championName,
}: ChampionSkinsData) {
  return (
    <div>
      <h3 className="mt-3 font-semibold text-lg">SKINS</h3>
      {championData.skins.map((skins) => (
        <div key={skins.id} className="my-5">
          <img
            className="rounded-md shadow-costum-box-shadow-1"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skins.num}.jpg`}
            alt=""
          />
          <h4 className="font-semibold">{skins.name}</h4>
        </div>
      ))}

      <div></div>
    </div>
  );
}
