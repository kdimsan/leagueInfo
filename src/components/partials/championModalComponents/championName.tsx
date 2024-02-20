import { ChampionData } from "@/app/utils/@types/champions";
import React from "react";

export interface ChampionsProps {
  championName: string;
  championTitle: string;
}

export default function ChampionName({
  championName,
  championTitle,
}: ChampionsProps) {
  return (
    <div>
      <h3 className="w-full flex items-center justify-center text-xl font-title tracking-wide font-semibold lg:text-3xl">
        {championName}, {championTitle}
      </h3>
    </div>
  );
}
