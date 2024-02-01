import Shield from "@/images/shield";
import Swords from "@/images/swords";
import React from "react";

interface SummonersDamages {
  damageTaken: number;
  damageDealt: number;
}

export default function SummonersDamages({
  damageTaken,
  damageDealt,
}: SummonersDamages) {
  return (
    <td className="text-center">
      <div className="flex flex-col items-center text-xs font-medium text-neutral-300 italic">
        <div className="flex items-center gap-1">
          <Swords />
          <span>{damageDealt.toLocaleString("en-US")}</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield />
          <span>{damageTaken.toLocaleString("en-US")}</span>
        </div>
      </div>
    </td>
  );
}
