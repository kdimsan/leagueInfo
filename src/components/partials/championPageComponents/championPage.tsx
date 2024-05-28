import React from "react";
import ChampionName from "./championName";
import ChampionInfo from "./championInfo";
import ChampionLore from "./championLore";
import ChampionSkins from "./championSkins";
import Image from "next/image";
import { ChampionData } from "@/app/utils/@types/champions";
import BackButton from "../backButton/backButton";

interface ChampionPageProps {
  championInfo: {
    championName: string;
    championData: ChampionData;
  };
}

export default function ChampionPage({ championInfo }: ChampionPageProps) {
  return (
    <div className="m-auto w-11/12 sm:w-5/6 md:w-4/5">
      <BackButton />
      {championInfo.championData &&
        Object.values(championInfo.championData).map(
          (championDetails: ChampionData) => (
            <div
              key={championDetails.id}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:justify-center">
                <div className="w-full lg:w-1/2">
                  <Image
                    className="rounded-md"
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDetails.id}_0.jpg`}
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
                </div>
                <div className="w-full lg:w-1/2">
                  <ChampionName
                    championName={championDetails.name}
                    championTags={championDetails.tags}
                    championTitle={championDetails.title}
                  />
                  <ChampionInfo championData={championDetails} />
                </div>
              </div>
              <ChampionLore championLore={championDetails.lore} />
              <ChampionSkins
                championSkins={championDetails.skins}
                championId={championDetails.id}
              />
            </div>
          )
        )}
    </div>
  );
}
