"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";
import React, { useState } from "react";
import ChampionSquareCard from "./championSquareCard";
import ChampionDetailsModal from "./partials/championModal/championDetailsModal";
import TitleConfig from "./titleConfig";

interface AllChampionsSectionProps {
  data: ChampionsProps[];
}

export default function AllChampionsSection({
  data,
}: AllChampionsSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selctedChampion, setSelctedChampion] = useState("");

  const handleModal = (championName: string) => {
    setSelctedChampion(championName);
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <TitleConfig
        className={"text-2xl tracking-wider lg:text-3xl"}
        title={"League of Legends Champions"}
      />
      <div
        className="grid grid-cols-2 justify-center items-center gap-7 mt-5
      sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 xl:gap-x-2 2xl:grid-cols-11"
      >
        {data.map((champion, index) => (
          <ChampionSquareCard
            data={champion}
            key={index}
            onClick={() => handleModal(champion.id)}
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
