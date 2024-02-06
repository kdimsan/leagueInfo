import { ChampionData } from "@/app/utils/@types/champions";
import React from "react";

export interface ChampionsProps {
  championData: ChampionData;
}

export default function ChampionName({ championData }: ChampionsProps) {
  return (
    <div>
      <h3 className="w-full flex items-center justify-center text-xl font-title tracking-wide font-semibold lg:text-3xl">
        {championData.name}, {championData.title}
      </h3>
    </div>
  );
}
