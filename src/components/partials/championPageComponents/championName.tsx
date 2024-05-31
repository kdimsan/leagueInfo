import { ChampionData } from "@/app/utils/@types/champions";
import React from "react";

export interface ChampionsProps {
  championName: string;
  championTitle: string;
  championTags: string[];
}

export default function ChampionName({
  championName,
  championTitle,
  championTags,
}: ChampionsProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className="text-xl font-title tracking-wide font-semibold lg:text-3xl">
        {championName}, {championTitle}
      </h3>
      <div className="mt-3 flex items-center gap-2">
        {championTags.map((tags, index) => (
          <span
            className="bg-neutral-900 rounded-md py-1 px-2 text-sm lg:text-base font-semibold italic"
            key={index}
          >
            {tags}
          </span>
        ))}
      </div>
    </div>
  );
}
