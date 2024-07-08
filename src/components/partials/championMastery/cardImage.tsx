import { SummonerMasteryChampionsProps } from "@/app/utils/@types/summonerInfo";
import getImageSquareCrop from "@/app/utils/functions/imageSquareCropFn";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";
import CardInfo from "./cardInfo";

type ChampionMasteryImgProps = {
  champion: SummonerMasteryChampionsProps;
};

export default function ChampionMasteryImg({
  champion,
}: ChampionMasteryImgProps) {
  const imageSrc = getImageSquareCrop(champion.championId);
  return (
    <div className="card-container max-w-[92px] flex flex-col items-center gap-1 shadow-[0px_0px_3px_1px_rgba(0,0,0,1)] rounded-md py-2 px-3 relative">
      <div className="relative">
        <Image
          className="rounded-md shadow shadow-black"
          src={imageSrc}
          alt="Champion image"
          width={60}
          height={60}
          unoptimized
        />
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs px-2 rounded-full shadow-[0px_0px_5px_1px_rgba(0,0,0,1)] 
        bg-gradient-to-t from-custom-pallete-cyan-600 to-cyan-600"
        >
          <span>{champion.championLevel}</span>
        </div>
      </div>
      <div className="mastery-image mt-1">
        <Image
          src={
            champion.championLevel < 4
              ? `/mastery_icons/masterycrest_level_0_art.png`
              : champion.championLevel > 10
              ? `/mastery_icons/masterycrest_level_10_art.png`
              : `/mastery_icons/masterycrest_level_${champion.championLevel}_art.png`
          }
          alt={`Champion Mastery Level icon ${champion.championLevel}`}
          width={40}
          height={40}
          unoptimized
        />
      </div>
      <CardInfo champion={champion} />
    </div>
  );
}
