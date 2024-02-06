import { ChampionData } from "@/app/utils/@types/champions";
import React, { useState } from "react";

interface ChampionLoreProps {
  championData: ChampionData;
  loreDescription: boolean;
  setLoreDescription: (arg0: boolean) => void;
}

export default function ChampionLore({
  championData,
  loreDescription,
  setLoreDescription,
}: ChampionLoreProps) {
  return (
    <div>
      <div>
        <span className="mt-3 font-semibold text-lg lg:text-xl">Lore:</span>
      </div>
      <div className="">
        <p className="text-base">
          {loreDescription ? championData.lore : championData.blurb}{" "}
        </p>
        <button
          className="font-semibold mt-1 mb-3 lg:text-base lg:hover:brightness-50 transition-all"
          onClick={() => setLoreDescription(!loreDescription)}
        >
          {loreDescription ? "Hide lore" : "Full lore"}
        </button>
      </div>
    </div>
  );
}
