import React from "react";
import ChampionPlayed from "../../championPlayed";
import { Participant } from "@/app/utils/@types/summonerMatches";
import SummonerPerks from "../../summonerPerks";

interface SummonerProps {
  participant: Participant;
}

export default function Summoner({ participant }: SummonerProps) {
  return (
    <td>
      <div className="flex items-center gap-2 px-3 py-1">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:gap-1">
          <ChampionPlayed
            championLevel={participant.champLevel}
            championName={participant.championName}
            width={36}
            height={36}
          />
          <div className="perks">
            <SummonerPerks
              runes={participant.perks}
              spell1={participant.summonerSpell1}
              spell2={participant.summonerSpell2}
              height={18}
              width={18}
            />
          </div>
        </div>
        <div className="flex flex-col items-start text-2xs text-ellipsis overflow-hidden whitespace-nowrap sm:text-xs">
          <span className={`font-medium text-neutral-300`}>
            {participant.riotIdGameName}
          </span>
          <span
            className={`text-ellipsis overflow-hidden whitespace-nowrap text-neutral-500`}
          >
            #{participant.riotIdTagline}
          </span>
        </div>
      </div>
    </td>
  );
}
