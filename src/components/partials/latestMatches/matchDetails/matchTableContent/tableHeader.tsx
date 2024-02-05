import React from "react";
import Backpack from "@/images/backpack";
import Sword from "@/images/sword";
import Minion from "@/images/minion";
import Coin from "@/images/coin";
import Champion from "@/images/champion";
import Kda from "@/images/kda";

export default function TableHeader() {
  return (
    <thead className="text-sm ">
      <th>
        <div className="flex items-center justify-center gap-costum-gap-1">
          <Champion color="#A09B8C" />
          Summoners
        </div>
      </th>

      <th>
        <div className="flex items-center justify-center gap-costum-gap-1">
          <Coin />
          Gold
        </div>
      </th>
      <th>
        <div className="flex items-center justify-center gap-costum-gap-1">
          <Minion />
          Farm
        </div>
      </th>
      <th>
        <div className="flex items-center justify-center gap-costum-gap-1">
          <Sword />
          Damages
        </div>
      </th>
      <th>
        <div className="flex items-center justify-center gap-costum-gap-1">
          <Backpack /> Items
        </div>
      </th>
    </thead>
  );
}
