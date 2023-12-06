import { patch } from "@/app/utils/patch";
import React, { useState } from "react";

import ChampionDetailsModal from "./championDetailsModal";
import { FreeWeekData } from "@/app/utils/freeWeek";

interface FreeWeekRotationProps {
  freeweek: FreeWeekData;
}

export default function FreeWeekRotation({ freeweek }: FreeWeekRotationProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selctedChampion, setSelctedChampion] = useState("");

  const handleModal = (championName: string) => {
    setSelctedChampion(championName);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-x-20 gap-y-7">
      {freeweek.freeChampions.map((champions, index) => (
        <div key={index} onClick={() => handleModal(champions.id)}>
          <img
            className="rounded-md"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champions.id}.png`}
            alt="Free week champion image"
            width={100}
          />
          <span>{champions.name}</span>
        </div>
      ))}
      <ChampionDetailsModal
        champion={selctedChampion}
        isOpen={modalOpen}
        onClose={() => handleModal("")}
      />
    </div>
  );
}
