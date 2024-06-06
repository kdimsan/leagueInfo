"use client";
import { SkinsProps } from "@/app/utils/@types/champions";
import { capitalizeFirstLetter } from "@/app/utils/formatters/capitalizeFirstLetter";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ChampionSkinsData {
  championSkins: SkinsProps[];
  championId: string;
}

export default function ChampionSkins({
  championSkins,
  championId,
}: ChampionSkinsData) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  return (
    <div className="w-full">
      <h3 className="mt-3 font-semibold text-lg">SKINS</h3>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {championSkins.map((skins) => (
            <div
              key={skins.id}
              className="flex flex-col items-center gap-2 my-3 embla__slide"
            >
              <Image
                className="rounded-[calc(0.75rem-1px)]"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skins.num}.jpg`}
                alt={`Champion ${championId} skin ${skins.name}`}
                quality={100}
                width={900}
                height={300}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <h4 className="font-semibold w-full text-lg">
                {capitalizeFirstLetter(skins.name)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
