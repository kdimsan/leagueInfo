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
    <div className="flex flex-col items-center">
      <div>
        <span className="text-sm font-semibold whitespace-nowrap">
          {kills} / {deaths} / {assists}
        </span>
      </div>
      <div
        className={`text-sm font-medium whitespace-nowrap ${
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
