import { patch } from "@/app/utils/patch";
import Image from "next/image";
import React from "react";

interface SummonerItemsProps {
  userItems: number[];
}

export default function SummonerItems({ userItems }: SummonerItemsProps) {
  return (
    <div className="items mt-2 w-fit">
      <dt className="flex flex-wrap gap-1">
        {userItems.map((userItem, index) => (
          <dd className="w-6 h-6" key={index}>
            {userItem.toString() === "0" ? (
              <div className="bg-zinc-800 w-6 h-6 rounded"></div>
            ) : (
              <Image
                className="rounded"
                src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${userItem}.png`}
                alt="user item"
                width={24}
                height={24}
                unoptimized
              />
            )}
          </dd>
        ))}
      </dt>
    </div>
  );
}
