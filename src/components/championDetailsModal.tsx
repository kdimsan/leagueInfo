import { api } from "@/app/utils/api/api";
import { ApiResponse, ChampionData } from "@/app/utils/champions";
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
  const [championData, setChampionData] = useState<{
    [key: string]: ChampionData;
  }>({});

  const [loreDescription, setLoreDescription] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const firsKey = Object.keys(championData);
  console.log("First key", firsKey);

  useEffect(() => {
    const fetchChampionData = async () => {
      const championDetails = await api.post<
        ApiResponse<{ [key: string]: ChampionData }>
      >("/champions_details", {
        championName: champion,
      });
      setChampionData(championDetails.data.data);
    };

    if (isOpen && champion) {
      fetchChampionData();
    }
  }, [isOpen, champion]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-black bg-opacity-60 overflow-y-hidden">
      <div
        className="relative w-11/12 h-screen overflow-y-auto
       max-w-lg mx-auto my-6 bg-black bg-opacity-80 rounded-md p-7 animate-appearing-down
       md:max-w-xl"
      >
        <img
          className="rounded-md mt-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
          alt="Champion splash art"
        />
        {Object.keys(championData).map((championName) => (
          <div key={championName} className="flex flex-col mt-4">
            <h3 className="w-full flex items-center justify-center text-xl font-semibold">
              {championData[championName].name},{" "}
              {championData[championName].title}
            </h3>

            <span className="mt-3 font-semibold text-lg">Lore:</span>

            <div className="">
              <p className="text-base">
                {loreDescription
                  ? championData[championName].lore
                  : championData[championName].blurb}{" "}
              </p>
              <button
                className="font-semibold mt-1 mb-3"
                onClick={() => setLoreDescription(!loreDescription)}
              >
                {loreDescription ? "Hide lore" : "Full lore"}
              </button>
            </div>

            <div>
              <h3 className="mt-3 font-semibold text-lg">SKINS</h3>
              <div>
                {championData[championName].skins.map((skins) => (
                  <div key={skins.id} className="my-5">
                    <img
                      className="rounded-md shadow-costum-box-shadow-1"
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skins.num}.jpg`}
                      alt=""
                    />
                    <h4 className="font-semibold">{skins.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <button className="absolute top-2 right-3" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}
