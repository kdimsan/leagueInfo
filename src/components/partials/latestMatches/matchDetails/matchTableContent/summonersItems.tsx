import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

interface SummonerItemsProps {
  items: number[];
}

export default function SummonersItems({ items }: SummonerItemsProps) {
  return (
    <td className="text-center">
      <div className="flex flex-wrap items-center justify-center gap-px">
        {items.map((item, index) => (
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
    </td>
  );
}
