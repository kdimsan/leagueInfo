"use clientß";
import React from "react";
import ChampionName from "./championName";
import ChampionInfo from "./championInfo";
import ChampionLore from "./championLore";
import ChampionSkins from "./championSkins";
import Image from "next/image";
import Modal from "../modal/modal";
import { ChampionData } from "@/app/utils/@types/champions";

interface ChampionPageProps {
  championInfo: {
    championName: string;
    championData: ChampionData;
  };
}

export default function ChampionPage({ championInfo }: ChampionPageProps) {
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
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.championName}_0.jpg`}
          alt="Champion splash art"
          style={{ width: "100%", height: "auto" }}
          quality={100}
          width={500}
          height={300}
        />
        {championInfo.championData &&
          Object.values(championInfo.championData).map(
            (championDetails: ChampionData) => (
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
              </div>
            )
          )}
      </div>
    </Modal>
  );
}
