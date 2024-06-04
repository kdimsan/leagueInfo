"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";
import React, { useState } from "react";
import ChampionSquareCard from "../championSquareCard";
import TitleConfig from "../titleConfig";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";

interface AllChampionsSectionProps {
  data: ChampionsProps[];
}

export default function AllChampionsSection({
  data,
}: AllChampionsSectionProps) {
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
    <div className="flex flex-col justify-center items-center py-6 default-bg  xl:py-6 xl:px-16">
      <TitleConfig
        className={"text-2xl tracking-wider md:text-3xl"}
        title={"League of Legends Champions"}
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
