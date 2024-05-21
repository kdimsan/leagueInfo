import { ChampionsProps } from "@/app/utils/@types/champions";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

interface ChampionSquareCardProps {
  data: ChampionsProps;
  onClick: () => void;
}

export default function ChampionSquareCard({
  data,
  onClick,
}: ChampionSquareCardProps) {
  return (
    <div
      className="flex flex-col items-center w-32 justify-center cursor-pointer tracking-wide
      hover:-translate-x-2 hover:-translate-y-2 transition-all hover:drop-shadow-costum1 hover:brightness-125"
      onClick={onClick}
    >
      <Image
        className="rounded-md"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${data.id}.png`}
        alt="Free week champion image"
        width={80}
        height={80}
      />
      <span className="font-medium text-sm lg:text-base whitespace-nowrap w-fit">
        {data.name}
      </span>
    </div>
  );
}
