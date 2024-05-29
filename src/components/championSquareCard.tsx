import { ChampionsProps } from "@/app/utils/@types/champions";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ChampionSquareCardProps {
  data: ChampionsProps;
}

export default function ChampionSquareCard({ data }: ChampionSquareCardProps) {
  return (
    <Link
      href={`/champions/${data.id}`}
      className="flex flex-col items-center w-32 justify-center cursor-pointer tracking-wide
      hover:-translate-x-1 hover:-translate-y-1 transition-all hover:drop-shadow-costum1 hover:brightness-125"
      scroll={false}
    >
      <Image
        className="rounded-md shadow-[0px_0px_6px_2px_rgba(0,0,0,0.4)]"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${data.id}.png`}
        alt="Free week champion image"
        width={80}
        height={80}
      />
      <span className="font-medium text-sm lg:text-base whitespace-nowrap w-fit">
        {data.name}
      </span>
    </Link>
  );
}
