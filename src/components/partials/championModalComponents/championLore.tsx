import React from "react";

interface ChampionLoreProps {
  championLore: string;
}

export default function ChampionLore({ championLore }: ChampionLoreProps) {
  return (
    <div>
      <div className="my-4 bg-costum-blue-800 py-2 px-3 rounded-md">
        <div>
          <span className="mt-3 font-semibold text-lg lg:text-xl">Lore:</span>
        </div>
        <div className="px-1">
          <p className="text-base">{championLore}</p>
        </div>
      </div>
    </div>
  );
}
