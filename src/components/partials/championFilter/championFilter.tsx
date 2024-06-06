"use client";
import React from "react";
import ChampionTagFilter from "./roleFilter";

export default function ChampionFilter() {
  return (
    <div
      className="sticky flex items-center gap-5 w-fit px-2 py-2 rounded-md mt-4
    "
    >
      <div className="font-semibold text-lg text-white">
        <h5>Filters:</h5>
      </div>
      <div>
        <ChampionTagFilter />
      </div>
    </div>
  );
}
