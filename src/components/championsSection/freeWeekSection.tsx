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
    <div className="flex flex-col justify-center items-center default-bg py-5">
      <TitleConfig
        className={"text-2xl tracking-wider md:text-3xl"}
        title={"Free Week Rotation"}
      />

      <div
        className="grid grid-cols-3 justify-center items-center gap-4 mt-5 xs:px-4 xs:grid-cols-4
      sm:grid-cols-5 sm:gap-8 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 xl:gap-x-5 2xl:grid-cols-11"
      >
        {filteredChampions.map((champion, index) => {
          return <ChampionSquareCard key={index} data={champion} />;
        })}
      </div>
    </div>
  );
}
