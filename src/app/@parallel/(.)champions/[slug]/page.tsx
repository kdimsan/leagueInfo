"use client";
import { ChampionData } from "@/app/utils/@types/champions";
import React, { useEffect, useState, useRef, Suspense } from "react";
import Close from "../../../../components/icons/close";

import ChampionName from "../../../../components/partials/championModalComponents/championName";
import ChampionLore from "../../../../components/partials/championModalComponents/championLore";
import ChampionSkins from "../../../../components/partials/championModalComponents/championSkins";
import ChampionInfo from "../../../../components/partials/championModalComponents/championInfo";
import Modal from "../../../../components/partials/modal/modal";
import Image from "next/image";
import { getChampionData } from "@/services/getChampionData";

interface Props {
  params: { slug: string };
}

export default function ChampionDetailsModal({ params }: Props) {
  const [championData, setChampionData] = useState<ChampionData>();

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await getChampionData(params.slug);
        setChampionData(response);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchChampionData();
  }, [params.slug]);

  return (
    <Modal>
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 overflow-y-auto 
        flex flex-col items-center max-w-lg mx-auto my-6 bg-costum-blue-950 bg-opacity-90 
        rounded-md pt-7 px-3 z-[99]
        md:max-w-xl md:px-4 lg:w-3/4 lg:max-w-none lg:pt-9 lg:px-24"
      >
        <Image
          className="rounded-md mt-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.slug}_0.jpg`}
          alt="Champion splash art"
          style={{ width: "100%", height: "auto" }}
          quality={100}
          width={500}
          height={300}
        />
        {championData &&
          Object.values(championData).map((championDetails: ChampionData) => (
            <div
              key={championDetails.id}
              className="flex flex-col mt-4 items-center"
            >
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
      </div>
    </Modal>
  );
}
