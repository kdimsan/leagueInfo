"use client";
import React from "react";
import ChampionTagFilter from "./roleFilter";

export default function ChampionFilter() {
  return (
    <div className="sticky flex justify-end gap-3 w-fit bg-gradient-to-t from-costum-yellow-300 to-costum-yellow-400 px-2 py-2 rounded-md mt-4">
      <div className="font-semibold text-neutral-950">
        <h5>Filters:</h5>
      </div>
      <div className="border border-neutral-950 rounded-md px-2">
        <ChampionTagFilter />
      </div>
    </div>
  );
}
