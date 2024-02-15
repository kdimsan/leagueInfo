import { ChampionsProps } from "@/app/utils/@types/champions";
import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

interface ChampionSquareCardProps {
  key: number;
  data: ChampionsProps;
  onClick: () => void;
}

export default function ChampionSquareCard({
  key,
  data,
  onClick,
}: ChampionSquareCardProps) {
  return (
    <div
      className="flex flex-col w-fit items-center justify-center cursor-pointer tracking-wide
      hover:-translate-x-2 hover:-translate-y-2 transition-all hover:drop-shadow-costum1 hover:brightness-125"
      key={key}
      onClick={onClick}
    >
      <Image
        className="rounded-md w-24"
        src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${data.id}.png`}
        alt="Free week champion image"
        width={96}
        height={96}
      />
      <span className="font-medium whitespace-nowrap">{data.name}</span>
    </div>
  );
}
