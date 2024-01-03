import { api } from "@/app/utils/api/api";
import { ApiResponse, ChampionData } from "@/app/utils/champions";
import React, { useEffect, useState, useRef } from "react";
import Close from "../close";
import useOutsideClick from "@/hooks/useOutsideClick";
import ChampionName from "./championInfoModal/championName";
import ChampionLore from "./championInfoModal/championLore";
import ChampionSkins from "./championInfoModal/championSkins";
import ChampionInfo from "./championInfoModal/championInfo";

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
  const [championData, setChampionData] = useState<{
    [key: string]: ChampionData;
  }>({});

  const [loreDescription, setLoreDescription] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
    setLoreDescription(false);
    setChampionData({});
  };

  useOutsideClick(modalRef, handleClose);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        if (isOpen && champion) {
          const championDetails = await api.post<
            ApiResponse<{ [key: string]: ChampionData }>
          >("/champions_details", { championName: champion });
          setChampionData(championDetails.data.data);
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
        className="relative h-4/5 overflow-y-auto
       max-w-lg mx-auto my-6 bg-black bg-opacity-90 rounded-md p-7 animate-appearing-down
       md:max-w-xl lg:w-2/4 lg:max-w-none lg:h-5/6"
        ref={modalRef}
      >
        <img
          className="rounded-md mt-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
          alt="Champion splash art"
        />
        {Object.keys(championData).map((championName) => (
          <div key={championName} className="flex flex-col mt-4">
            <ChampionName championData={championData[championName]} />

            <ChampionInfo championData={championData[championName]} />

            <ChampionLore
              championData={championData[championName]}
              loreDescription={loreDescription}
              setLoreDescription={setLoreDescription}
            />

            <ChampionSkins
              championData={championData[championName]}
              championName={championName}
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
