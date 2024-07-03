"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";
import React, { useState } from "react";
import ChampionSquareCard from "../championSquareCard";
import TitleConfig from "../titleConfig";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";

interface AllChampionsSectionProps {
  data: ChampionsProps[];
}

export const ChampionSectionDefault = (
  data: ChampionsProps[],
  title: string
) => {
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
    <section className="flex flex-col justify-center items-center gap-10 default-bg py-5">
      <TitleConfig
        className={"text-2xl tracking-wider md:text-3xl"}
        title={title}
      />
      <div
        className="grid grid-cols-3 justify-center items-center gap-4 xs:px-4 xs:grid-cols-4
      sm:grid-cols-5 sm:gap-8 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 xl:gap-x-5 2xl:grid-cols-11"
      >
        {filteredChampions.map((champion, index) => {
          return <ChampionSquareCard key={index} data={champion} />;
        })}
      </div>
    </section>
  );
};

export default function AllChampionsSection({
  data,
}: AllChampionsSectionProps) {
  return ChampionSectionDefault(data, "League Of Legends Champions");
}
