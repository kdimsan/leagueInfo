import { patch } from "@/app/utils/patch";
import Shield from "@/images/shield";
import Swords from "@/images/swords";
import Image from "next/image";
import React from "react";

interface SummonersStats {
  damageTaken: number;
  damageDealt: number;
  summonerItems: number[];
}

export default function SummonersStats({
  damageTaken,
  damageDealt,
  summonerItems,
}: SummonersStats) {
  return (
    <td>
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-col items-center justify-center text-xs font-medium text-neutral-300 italic xs:flex-row xs:gap-2">
          <div className="flex items-center xs:gap-1">
            <Swords />
            <span>{damageDealt.toLocaleString("en-US")}</span>
          </div>
          <div className="flex items-center xs:gap-1">
            <Shield />
            <span>{damageTaken.toLocaleString("en-US")}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-px">
          {summonerItems.map((item, index) => (
            <dd className="w-5 h-5" key={index}>
              {item.toString() === "0" ? (
                <div className="bg-zinc-800 w-5 h-5 rounded"></div>
              ) : (
                <Image
                  className="rounded"
                  src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${item}.png`}
                  alt="user item"
                  width={20}
                  unoptimized
                  height={20}
                />
              )}
            </dd>
          ))}
        </div>
      </div>
    </td>
  );
}
