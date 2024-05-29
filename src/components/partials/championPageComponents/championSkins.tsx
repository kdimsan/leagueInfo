import { SkinsProps } from "@/app/utils/@types/champions";
import { capitalizeFirstLetter } from "@/app/utils/formatters/capitalizeFirstLetter";
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
    <div className="w-full">
      <h3 className="mt-3 font-semibold text-lg">SKINS</h3>
      {championSkins.map((skins) => (
        <div key={skins.id} className="flex flex-col items-center my-7">
          <Image
            className="rounded-md shadow-[1px_2px_10px_4px_rgba(0,0,0,0.6)]"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skins.num}.jpg`}
            alt={`Champion ${championId} skin ${skins.name}`}
            quality={100}
            width={900}
            height={300}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <h4 className="font-semibold mt-1 w-full">
            {capitalizeFirstLetter(skins.name)}
          </h4>
        </div>
      ))}
    </div>
  );
}
