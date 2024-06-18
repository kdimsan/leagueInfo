import React from "react";
import Sword from "@/images/sword";
import Minion from "@/images/minion";
import Coin from "@/images/coin";
import Champion from "@/images/champion";

export default function TableHeader() {
  return (
    <thead className="text-xs sm:text-sm">
      <th>
        <div className="flex items-center justify-center gap-px">
          <Champion color="#A09B8C" />
          Summoners
        </div>
      </th>

      <th>
        <div className="flex items-center justify-center gap-px">
          <Coin />
          Gold
        </div>
      </th>
      <th>
        <div className="flex items-center justify-center gap-px">
          <Minion />
          Farm
        </div>
      </th>
      <th>
        <div className="flex items-center justify-center gap-px">
          <Sword />
          Damages
        </div>
      </th>
    </thead>
  );
}
