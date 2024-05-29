import React from "react";

interface ChampionLoreProps {
  championLore: string;
}

export default function ChampionLore({ championLore }: ChampionLoreProps) {
  return (
    <div>
      <div className="my-4 border-1 border-neutral-900 py-2 px-3 rounded-md shadow-[1px_1px_6px_3px_rgba(0,0,0,0.2)]">
        <div>
          <span className="mt-3 font-semibold text-lg lg:text-xl">Lore:</span>
        </div>
        <div className="px-1">
          <p className="text-base text-justify">{championLore}</p>
        </div>
      </div>
    </div>
  );
}
