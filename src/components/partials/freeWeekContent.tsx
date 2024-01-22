import { patch } from "@/app/utils/patch";
import React, { useState } from "react";

import ChampionDetailsModal from "./championDetailsModal";
import { FreeWeekData } from "@/app/utils/freeWeek";
import ChampionSquareCard from "../championSquareCard";

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
    <div className="grid grid-cols-2  justify-center  gap-7 md:grid-cols-6 xl:grid-cols-5 xl:gap-x-10">
      {freeweek.freeChampions.map((champions, index) => (
        <ChampionSquareCard
          key={index}
          data={champions}
          onClick={() => handleModal(champions.id)}
        />
      ))}
      <ChampionDetailsModal
        champion={selctedChampion}
        isOpen={modalOpen}
        onClose={() => handleModal("")}
      />
    </div>
  );
}
