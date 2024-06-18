import { Participant } from "@/app/utils/@types/summonerMatches";
import React from "react";
import Summoner from "./matchTableContent/summoners";
import SummonersGold from "./matchTableContent/summonersGold";
import SummonersFarm from "./matchTableContent/summonersFarm";
import SummonersDamages from "./matchTableContent/summonersDamages";
import SummonersItems from "./matchTableContent/summonersItems";
import TableHeader from "./matchTableContent/tableHeader";
import SummonersStats from "./matchTableContent/summonersStats";

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
      <TableHeader />
      <tbody className="w-full text-center m-auto">
        {participants.map((participant, index) => {
          const rowColorClass =
            participantTeam === 100
              ? index % 2 === 0
                ? "bg-match-details-blue-light"
                : "bg-match-details-blue-dark"
              : index % 2 === 0
              ? "bg-match-details-red-light"
              : "bg-match-details-red-dark";
          return (
            participant.teamId === participantTeam && (
              <tr className={`text-center   ${rowColorClass}`}>
                <Summoner participant={participant} />
                <SummonersGold
                  goldPerMin={participant.challenges.goldPerMinute}
                  totalGold={participant.goldEarned}
                />
                <SummonersFarm
                  totalFarm={participant.totalFarm}
                  gameDuration={participant.challenges.gameLength}
                />

                <SummonersStats
                  damageDealt={participant.totalDamageDealtToChampions}
                  damageTaken={participant.totalDamageTaken}
                  summonerItems={participant.items}
                />
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
}
