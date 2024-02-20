import { api } from "@/app/utils/api/api";
import { ChampionData } from "@/app/utils/@types/champions";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Close from "../icons/close";
import useOutsideClick from "@/hooks/useOutsideClick";
import ChampionName from "./championModalComponents/championName";
import ChampionLore from "./championModalComponents/championLore";
import ChampionSkins from "./championModalComponents/championSkins";
import ChampionInfo from "./championModalComponents/championInfo";

interface ChampionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  champion: string;
}

export default function ChampionDetailsModal({
  isOpen,
  onClose,
  champion,
}: ChampionDetailsProps) {
  const [championData, setChampionData] = useState<ChampionData>();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
    setChampionData(undefined);
  };

  useOutsideClick(modalRef, handleClose);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        if (isOpen && champion) {
          const championDetails: ChampionData = (
            await api.post("/champion_details", {
              championName: champion,
            })
          ).data;
          setChampionData(championDetails);
        }
      } catch (error) {
        console.error("Error fetching champion data:", error);
      }
    };

    fetchChampionData();
  }, [isOpen, champion]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-black bg-opacity-80 overflow-y-hidden">
      <div
        className="relative h-5/6 overflow-y-auto
       max-w-lg mx-auto my-6 bg-costum-blue-950 bg-opacity-90 rounded-md py-7 px-3 animate-appearing-down
       md:max-w-xl md:px-4 lg:w-2/4 lg:max-w-none"
        ref={modalRef}
      >
        <img
          className="rounded-md mt-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
          alt="Champion splash art"
          width={"full"}
        />
        {championData &&
          Object.values(championData).map((championDetails: ChampionData) => (
            <div key={championDetails.id} className="flex flex-col mt-4">
              <ChampionName
                championName={championDetails.name}
                championTitle={championDetails.title}
              />
              <ChampionInfo championData={championDetails} />
              <ChampionLore championLore={championDetails.lore} />
              <ChampionSkins
                championSkins={championDetails.skins}
                championId={championDetails.id}
              />
            </div>
          ))}
        <button className="absolute top-4 right-2" onClick={handleClose}>
          {<Close />}
        </button>
      </div>
    </div>
  );
}
