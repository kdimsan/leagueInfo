import { ChampionsProps } from "@/app/utils/champions";
import React, { useState } from "react";
import ChampionSquareCard from "./championSquareCard";
import ChampionDetailsModal from "./partials/championDetailsModal";
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
      <TitleConfig className={"lg:text-2xl"} title={"League Champions"} />
      <div className="grid grid-cols-2  justify-center gap-7 mt-5 md:grid-cols-6 xl:grid-cols-10 xl:gap-x-10">
        {data.map((champion, index) => (
          <ChampionSquareCard
            data={champion}
            key={index}
            onClick={() => handleModal(champion.id)}
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
