import { api } from "@/app/utils/api/api";
import { ChampionFullDetail } from "@/app/utils/champions";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [championData, setChampionData] = useState<ChampionFullDetail>();

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const fetchChampionData = async () => {
      const championDetails: ChampionFullDetail = await api.post(
        "/champions_details",
        {
          championName: champion,
        }
      );
      setChampionData(championDetails);
    };

    // const handleAPIChampion = async () => {
    //   await api.get("/champions_details").then((response) => {
    //     setChampionData(response.data);
    //   });
    // };
    if (isOpen && champion) {
      fetchChampionData();
    }
  }, [isOpen, champion]);

  console.log(championData);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-60">
      <div className="relative w-auto max-w-lg mx-auto my-6 bg-black bg-opacity-80 rounded-md p-6 animate-appearing-down">
        <span>Champion loading image</span>
        <div className="flex flex-col">
          <h3>{championData?.name}</h3>
          <h4>{championData?.title}</h4>
          <span>Fighter, Bruiser</span>
          <p>Lore</p>
          <span>Skins splash / loading</span>
        </div>
        <button className="absolute top-1 right-2" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}
