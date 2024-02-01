import { Participant } from "@/app/utils/@types/summonerMatches";
import React from "react";
import ChampionPlayed from "../championPlayed";
import Summoner from "./matchTableContent/summoners";
import SummonersGold from "./matchTableContent/summonersGold";
import SummonersFarm from "./matchTableContent/summonersFarm";
import SummonersDamages from "./matchTableContent/summonersDamages";
import SummonersItems from "./matchTableContent/summonersItems";

interface MatchDetailsTableProps {
  participants: Participant[];
  participantTeam: number;
}

export default function MatchDetailsTable({
  participants,
  participantTeam,
}: MatchDetailsTableProps) {
  return (
    <table className="w-full m-auto text-center">
      <thead className="text-sm ">
        <th>Summoner</th>
        <th>Gold</th>
        <th>Farm</th>
        <th>Damage</th>
        <th>Items</th>
      </thead>
      <tbody className="w-full text-center m-auto">
        {participants.map((participant, index) => {
          return (
            participant.teamId === participantTeam && (
              <tr className={`text-center `}>
                <Summoner participant={participant} />
                <SummonersGold
                  goldPerMin={participant.challenges.goldPerMinute}
                  totalGold={participant.goldEarned}
                />
                <SummonersFarm
                  totalFarm={participant.totalFarm}
                  gameDuration={participant.challenges.gameLength}
                />
                <SummonersDamages
                  damageDealt={participant.totalDamageDealtToChampions}
                  damageTaken={participant.totalDamageTaken}
                />
                <SummonersItems items={participant.items} />
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
}
