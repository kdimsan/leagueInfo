import { patch } from "@/app/utils/patch";
import React, { useState } from "react";

import ChampionDetailsModal from "./championDetailsModal";
import { FreeWeekData } from "@/app/utils/freeWeek";

interface FreeWeekRotationProps {
  freeweek: FreeWeekData;
}

export default function FreeWeekContent({ freeweek }: FreeWeekRotationProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selctedChampion, setSelctedChampion] = useState("");

  const handleModal = (championName: string) => {
    setSelctedChampion(championName);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="grid grid-cols-2  justify-center  gap-y-7 md:grid-cols-6 xl:gap-x-5 xl:grid-cols-4">
      {freeweek.freeChampions.map((champions, index) => (
        <div
          className="flex flex-col items-center cursor-pointer"
          key={index}
          onClick={() => handleModal(champions.id)}
        >
          <img
            className="rounded-md w-24 xl:w-24"
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champions.id}.png`}
            alt="Free week champion image"
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
