"use client";
import React from "react";
import ChampionTagFilter from "./roleFilter";

export default function ChampionFilter() {
  return (
    <div className="sticky flex justify-end gap-1 w-fit bg-match-details-blue-light px-2 py-2 rounded-md mt-4">
      <div className="font-semibold">
        <h5>Filters:</h5>
      </div>
      <div className="border border-slate-300 rounded-md px-2 ">
        <ChampionTagFilter />
      </div>
    </div>
  );
}
