import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

//Component that renders champion image

interface ChampionImageProps {
  championName: string;
  styles?: string;
}

export default function ChampionImage({
  championName,
  styles,
}: ChampionImageProps) {
  return (
    <Image
      className={`rounded-md ${styles}`}
      src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/champion/${championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567`}
      width={18}
      height={18}
      alt={`${championName}`}
      quality={100}
    />
  );
}
