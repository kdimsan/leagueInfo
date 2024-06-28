"use client";
import { SkinsProps } from "@/app/utils/@types/champions";
import { capitalizeFirstLetter } from "@/app/utils/formatters/capitalizeFirstLetter";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Next from "@/images/next";
import Previous from "@/images/previous";
import SubTitle from "../subTitle/subTitle";

interface ChampionSkinsData {
  championSkins: SkinsProps[];
  championId: string;
}

export default function ChampionSkins({
  championSkins,
  championId,
}: ChampionSkinsData) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="w-full flex flex-col gap-3">
      <SubTitle subTitle="SKINS" className="text-2xl" />
      <div className="embla  relative" ref={emblaRef}>
        <div className="embla__container">
          {championSkins.map((skins) => (
            <div
              key={skins.id}
              className="flex flex-col items-center gap-2 embla__slide"
            >
              <Image
                className="rounded-[calc(0.75rem-1px)]"
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skins.num}.jpg`}
                alt={`Champion ${championId} skin ${skins.name}`}
                unoptimized
                width={900}
                height={300}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <h4 className="font-semibold w-full px-4 z-50 font-title tracking-wide text-xl">
                {capitalizeFirstLetter(skins.name)}
              </h4>
            </div>
          ))}
        </div>

        <div className="w-full absolute -left-4 bottom-px flex items-center justify-end gap-4">
          <button className="embla__prev" onClick={scrollPrev}>
            <Previous />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
}
