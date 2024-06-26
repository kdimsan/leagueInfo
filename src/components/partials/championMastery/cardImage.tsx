import getImageSquareCrop from "@/app/utils/functions/imageSquareCropFn";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

type ChampionMasteryImgProps = {
  championName: string;
};

export default function ChampionMasteryImg({
  championName,
}: ChampionMasteryImgProps) {
  const imageSrc = getImageSquareCrop(championName);
  return (
    <div className="flex items-center w-20 h-fit shadow shadow-black">
      <Image
        className="rounded-md"
        src={imageSrc}
        alt="Champion image"
        width={70}
        height={70}
        unoptimized
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
