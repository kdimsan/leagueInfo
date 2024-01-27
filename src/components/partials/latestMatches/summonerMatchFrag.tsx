import React from "react";

interface SummonerMatchFragProps {
  kills: number;
  assists: number;
  deaths: number;
  kda: number;
}

export default function SummonerMatchFrag({
  kills,
  assists,
  deaths,
  kda,
}: SummonerMatchFragProps) {
  return (
    <div className="flex flex-col items-center  -mt-3">
      <div>
        <span className="text-base font-semibold">
          {kills} / {deaths} / {assists}
        </span>
      </div>
      <div
        className={`text-sm font-medium ${
          kda < 1
            ? "text-red-500"
            : kda < 2
            ? "text-neutral-400"
            : "text-sky-500"
        }`}
      >
        <span>{kda.toFixed(1)} KDA</span>
      </div>
    </div>
  );
}
