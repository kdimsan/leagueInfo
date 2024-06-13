import { patch } from "@/app/utils/patch";
import { Participant } from "@/app/utils/@types/summonerMatches";
import Image from "next/image";
import React from "react";

interface MatchPlayersProps {
  participantsByMatchInfo: Participant[];
  searchUserPuiid: string;
}

export default function MatchPlayers({
  participantsByMatchInfo,
  searchUserPuiid,
}: MatchPlayersProps) {
  const renderParticipant = (participant: Participant) => (
    <div
      className={`flex items-center gap-2 font-medium ${
        participant.teamId === 100 ? "justify-start flex-row-reverse" : ""
      } ${
        participant.puuid === searchUserPuiid
          ? "text-white"
          : "text-neutral-400"
      } `}
      key={participant.summonerId}
    >
      <Image
        className="rounded-md"
        src={`https://opgg-static.akamaized.net/meta/images/lol/${patch}/champion/${participant.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1705466001567`}
        width={18}
        height={18}
        alt={`${participant.riotIdGameName} played as ${participant.championName}`}
        unoptimized
      />
      <span
        className={`text-ellipsis text-xs overflow-hidden w-20  ${
          participant.teamId === 100 ? "text-right" : "text-left"
        }`}
      >
        {participant.riotIdGameName}
      </span>
    </div>
  );

  return (
    <div className={`playersHolder flex gap-4 justify-center xl:mt-3 2xl:mt-0`}>
      <div className="flex flex-col  gap-1 text-ellipsis overflow-hidden whitespace-nowrap">
        {participantsByMatchInfo
          .filter((participant) => participant.teamId === 100)
          .map(renderParticipant)}
      </div>
      <div className="flex flex-col  gap-1 text-ellipsis overflow-hidden whitespace-nowrap">
        {participantsByMatchInfo
          .filter((participant) => participant.teamId === 200)
          .map(renderParticipant)}
      </div>
    </div>
  );
}
