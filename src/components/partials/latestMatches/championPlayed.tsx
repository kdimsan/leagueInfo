import getImageSquareCrop from "@/app/utils/functions/imageSquareCropFn";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

interface ChampionPlayedProps {
  championName: string;
  championLevel: number;
  width: number;
  height: number;
}

export default function ChampionPlayed({
  championName,
  championLevel,
  width,
  height,
}: ChampionPlayedProps) {
  const imageSource = getImageSquareCrop(championName);

  return (
    <div className="relative w-fit flex">
      <Image
        className="rounded-full relative overflow-hidden shadow-md shadow-black"
        src={imageSource}
        alt={`${championName} image`}
        width={width}
        height={height}
        unoptimized
      />
      <span className="flex items-center justify-center bg-neutral-800 rounded-full absolute w-5 h-5 -bottom-1 -right-0.5 text-xs">
        {championLevel}
      </span>
    </div>
  );
}
