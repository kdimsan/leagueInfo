import { patch } from "@/app/utils/@types/patch";
import Image from "next/image";
import React from "react";

interface SummonerItemsProps {
  items: number[];
}

export default function SummonersItems({ items }: SummonerItemsProps) {
  return (
    <td>
      <div className="flex">
        {items.map((item, index) => (
          <dd className="w-6 h-6" key={index}>
            {item.toString() === "0" ? (
              <div className="bg-zinc-800 w-5 h-5 rounded"></div>
            ) : (
              <Image
                className="rounded"
                src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${item}.png`}
                alt="user item"
                width={20}
                height={20}
              />
            )}
          </dd>
        ))}
      </div>
    </td>
  );
}
