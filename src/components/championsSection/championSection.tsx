import React from "react";
import FreeWeekSection from "./freeWeekSection";
import AllChampionsSection from "./allChampionsSection";
import { ChampionsProps } from "@/app/utils/@types/champions";
import ChampionFilter from "../partials/championFilter/championFilter";

interface ChampionSectionProps {
  freeWeekChampionsData: ChampionsProps[];
  allChampionsRes: ChampionsProps[];
}

export default function ChampionSection({
  freeWeekChampionsData,
  allChampionsRes,
}: ChampionSectionProps) {
  return (
    <div className="relative h-full">
      <ChampionFilter />
      <div className="flex flex-col gap-12 mt-4 md:gap-16 ">
        <FreeWeekSection data={freeWeekChampionsData} />
        <AllChampionsSection data={allChampionsRes} />
      </div>
    </div>
  );
}
