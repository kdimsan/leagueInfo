"use client";
import React, { Suspense, useState } from "react";
import { FreeWeekDataRes } from "@/app/utils/@types/freeWeek";
import TitleConfig from "../titleConfig";
import ChampionSquareCard from "../championSquareCard";
import { ChampionsProps } from "@/app/utils/@types/champions";
import ChampionTagFilter from "../partials/championFilter/roleFilter";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";

interface FreeWeekSectionProps {
  data: ChampionsProps[];
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  const { championTagFilter } = useChampionTagFilter();
  const filteredChampions =
    championTagFilter !== "All"
      ? data.filter((c) => {
          const var1 = c.tags.filter((tag) => {
            return tag === championTagFilter;
          });

          return var1.length > 0;
        })
      : data;

  return (
    <div className="flex flex-col justify-center items-center py-6 default-bg xl:py-6 xl:px-16">
      <TitleConfig
        className={"text-2xl tracking-wider md:text-3xl"}
        title={"Free Week Rotation"}
      />

      <div
        className="grid grid-cols-2 justify-center items-center gap-7 mt-5 
      sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 xl:gap-x-2 2xl:grid-cols-11"
      >
        {filteredChampions.map((champion, index) => {
          return <ChampionSquareCard key={index} data={champion} />;
        })}
      </div>
    </div>
  );
}
