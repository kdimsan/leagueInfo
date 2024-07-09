"use client";
import React from "react";
import ChampionTagFilter from "./roleFilter";
import ChampionNameFilter from "./championNameFilter";

export default function ChampionFilter() {
  return (
    <div className="flex flex-col items-start default-bg w-full gap-3 justify-center p-4 rounded-md mt-4 lg:flex-row lg:items-center lg:justify-start">
      <div className="font-semibold text-base md:text-lg text-white">
        <h5>Filters:</h5>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center px-2">
        <ChampionTagFilter />
        <ChampionNameFilter />
      </div>
    </div>
  );
}
