import React, { useState } from "react";

import ChampionDetailsModal from "./championDetailsModal";
import { FreeWeekData } from "@/app/utils/@types/freeWeek";
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
    <div className="grid grid-cols-2 justify-center items-center gap-7 mt-5 md:grid-cols-6 xl:grid-cols-11 xl:gap-x-10">
      {Object.values(freeweek).map((champions, index) => (
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
