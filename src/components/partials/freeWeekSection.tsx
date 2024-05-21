"use client";
import React, { Suspense, useState } from "react";
import { FreeWeekDataRes } from "@/app/utils/@types/freeWeek";
import TitleConfig from "../titleConfig";
import ChampionSquareCard from "../championSquareCard";
import ChampionDetailsModal from "./championModal/championDetailsModal";
import { ChampionsProps } from "@/app/utils/@types/champions";

interface FreeWeekSectionProps {
  data: ChampionsProps[];
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selctedChampion, setSelctedChampion] = useState("");

  const handleModal = (championName: string) => {
    setSelctedChampion(championName);
    setModalOpen(!modalOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <TitleConfig
        className={"text-2xl tracking-wider lg:text-3xl"}
        title={"Free Week Rotation"}
      />
      <div
        className="grid grid-cols-2 justify-center items-center gap-7 mt-5 
      sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 xl:gap-x-2 2xl:grid-cols-11"
      >
        {data.map((champions, index) => (
          <ChampionSquareCard
            key={index}
            data={champions}
            onClick={() => handleModal(champions.id)}
          />
        ))}
      </div>
      <ChampionDetailsModal
        champion={selctedChampion}
        isOpen={modalOpen}
        onClose={() => handleModal("")}
      />
    </div>
  );
}
