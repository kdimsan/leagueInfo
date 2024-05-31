import { SpellsProps } from "@/app/utils/@types/champions";
import React from "react";

interface SpellDescriptionProps {
  button?: string;
  spell: SpellsProps;
}

export default function SpellDescription({ spell }: SpellDescriptionProps) {
  const titles = "text-gray-300 italic";
  const values = "font-semibold";

  return (
    <div className="absolute top-full -right-5 overflow-hidden w-40 bg-neutral-900 border border-costum-yellow-300 z-[100000] p-2 mt-2 text-white rounded-md text-xs xs:w-44 sm:w-48">
      <div className="flex flex-col gap-2">
        <div className="name flex flex-col">
          <span className={`${titles}`}>Name:</span>
          <span className={`${values}`}>{spell.name}</span>
        </div>
        <div className="cooldown flex flex-col">
          <span className={`${titles}`}>Cooldown(seconds):</span>
          <span className={`${values}`}>{spell.cooldownBurn}</span>
        </div>

        <div className="cost flex flex-col">
          <span className={`${titles}`}>Cost:</span>
          <span className={`${values}`}>{spell.costBurn}</span>
        </div>
        <div className="range flex flex-col">
          <span className={`${titles}`}>Range:</span>
          <span className={`${values}`}>{spell.rangeBurn}</span>
        </div>

        <div className="desc flex flex-col">
          <span className={`${titles}`}>Description:</span>
          <p className={`${values} text-balance`}>{spell.description}</p>
        </div>
      </div>
    </div>
  );
}
