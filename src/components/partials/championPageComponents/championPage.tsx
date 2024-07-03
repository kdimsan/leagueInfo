import React from "react";
import ChampionName from "./championName";
import ChampionInfo from "./championGraphics";
import ChampionLore from "./championLore";
import ChampionSkins from "./championSkins";
import Image from "next/image";
import { ChampionData } from "@/app/utils/@types/champions";
import BackButton from "../backButton/backButton";
import ChampionSpells from "./championSpells/championSpells";

interface ChampionPageProps {
  championInfo: {
    championName: string;
    championData: ChampionData;
  };
}

export default function ChampionPage({ championInfo }: ChampionPageProps) {
  return (
    <section className="w-full p-4 md:px-8 md:py-5 sm:w-5/6 md:w-3/4 default-bg">
      <BackButton />
      {championInfo.championData && (
        <div
          key={championInfo.championData.id}
          className="flex flex-col items-center gap-5 lg:gap-8"
        >
          <div className="flex flex-col items-center gap-2 w-full lg:flex-row lg:items-start lg:justify-center">
            <div className="w-full flex flex-col gap-2 lg:w-1/2 lg:gap-3">
              <Image
                className="rounded-md shadow-[1px_2px_10px_4px_rgba(0,0,0,0.6)]"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.championData.id}_0.jpg`}
                alt="Champion splash art"
                unoptimized
                width={500}
                height={300}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-2">
              <ChampionName
                championName={championInfo.championData.name}
                championTags={championInfo.championData.tags}
                championTitle={championInfo.championData.title}
              />
              <ChampionInfo championData={championInfo.championData} />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-evenly">
            <ChampionSpells
              championSpells={championInfo.championData.spells}
              championKey={championInfo.championData.key}
            />
            <ChampionLore
              championLore={championInfo.championData.lore}
              championAllyTips={championInfo.championData.allytips}
              championEnemyTips={championInfo.championData.enemytips}
            />
          </div>
          <ChampionSkins
            championSkins={championInfo.championData.skins}
            championId={championInfo.championData.id}
          />
        </div>
      )}
    </section>
  );
}
