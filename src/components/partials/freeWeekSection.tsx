"use client";
import React, { Suspense, useState } from "react";
import { FreeWeekDataRes } from "@/app/utils/@types/freeWeek";
import TitleConfig from "../titleConfig";
import ChampionSquareCard from "../championSquareCard";
import ChampionDetailsModal from "./championDetailsModal";
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
      <TitleConfig className={"lg:text-3xl"} title={"Free Week Rotation"} />
      <div className="grid grid-cols-2 justify-center items-center gap-7 mt-5 md:grid-cols-6 xl:grid-cols-11 xl:gap-x-10">
        {data.map((champions, index) => (
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
    </div>
  );
}
