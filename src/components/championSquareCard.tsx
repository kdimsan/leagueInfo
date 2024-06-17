"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ChampionSquareCardProps {
  data: ChampionsProps;
}

export default function ChampionSquareCard({ data }: ChampionSquareCardProps) {
  const [imageSize, setImageSize] = useState({ width: 80, height: 80 });

  useEffect(() => {
    const handleResize = () => {
      setImageSize({
        width: window.innerWidth < 640 ? 60 : 80,
        height: window.innerWidth < 640 ? 60 : 80,
      });
    };

    handleResize(); // Execute once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Link
      href={`/champions/${data.id}`}
      className="flex flex-col items-center justify-center cursor-pointer tracking-wide gap-0.5
      hover:-translate-x-1 hover:-translate-y-1 transition-all hover:drop-shadow-costum1 hover:brightness-125"
    >
      <Image
        className="rounded-md shadow-[0px_0px_6px_2px_rgba(0,0,0,0.4)]"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${data.id}.png`}
        alt="Free week champion image"
        width={imageSize.width}
        height={imageSize.height}
        unoptimized
      />
      <span className="font-medium text-[10px] sm:text-xs whitespace-nowrap w-fit text-shadow-costum-shadow-small">
        {data.name}
      </span>
    </Link>
  );
}
