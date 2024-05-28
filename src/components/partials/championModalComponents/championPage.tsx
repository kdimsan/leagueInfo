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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 overflow-y-auto 
        flex flex-col items-center mx-auto my-6 bg-costum-blue-950 bg-opacity-90 
        rounded-md pt-7 px-3 z-[99]
        md:px-4 lg:w-3/4 lg:max-w-none lg:pt-9 lg:px-24"
      >
        <Image
          className="rounded-md mt-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.championName}_0.jpg`}
          alt="Champion splash art"
          quality={100}
          width={500}
          height={300}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
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
                <ChampionSkins
                  championSkins={championDetails.skins}
                  championId={championDetails.id}
                />
              </div>
            )
          )}
      </div>
    </Modal>
  );
}
