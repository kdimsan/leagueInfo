"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";
import React, { useState } from "react";
import ChampionSquareCard from "../championSquareCard";
import TitleConfig from "../titleConfig";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";
import SubTitle from "../partials/subTitle/subTitle";

interface AllChampionsSectionProps {
  data: ChampionsProps[];
}

export const ChampionSectionDefault = (
  data: ChampionsProps[],
  title: string
) => {
  const { championTagFilter, championNameFilter } = useChampionTagFilter();

  const filteredChampions = data.filter((champion) => {
    const filterByName = champion.id
      .toLowerCase()
      .includes(championNameFilter.toLowerCase());

    const filterByTag =
      championTagFilter === "All" || champion.tags.includes(championTagFilter);

    return filterByName && filterByTag;
  });

  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 default-bg py-5">
      <TitleConfig
        className={"text-2xl tracking-wider md:text-3xl"}
        title={title}
      />
      <div className="flex px-2 md:px-6 w-full">
        <ul className="flex items-center justify-center w-full flex-wrap gap-5 md:gap-x-7 md:gap-y-8">
          {filteredChampions.length == 0 ? (
            <div>
              <SubTitle
                subTitle="No Champion Found :("
                className="text-xl !font-montserrat py-4"
              />
            </div>
          ) : (
            filteredChampions.map((champion, index) => {
              return <ChampionSquareCard key={index} data={champion} />;
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default function AllChampionsSection({
  data,
}: AllChampionsSectionProps) {
  return ChampionSectionDefault(data, "League Of Legends Champions");
}
