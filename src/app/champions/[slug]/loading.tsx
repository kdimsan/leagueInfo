import BackButton from "@/components/partials/backButton/backButton";
import SubTitle from "@/components/partials/subTitle/subTitle";
import React from "react";

export default function Loading() {
  const spellsCard = new Array(4).fill({});
  return (
    <main className="flex items-center justify-center py-5">
      <div className="w-full flex flex-col p-4 gap-5 default-bg md:px-8 md:py-5 sm:w-5/6 md:w-3/4 lg:gap-8">
        <BackButton />
        <div className="img-graphics flex flex-col gap-5 lg:flex-row">
          <div className="img w-full h-48 lg:w-1/2 lg:h-96 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
          <div className="graphic w-full lg:w-1/2 lg:h-96 flex flex-col gap-4">
            <div className="title w-1/2 mx-auto h-8 animate-colorSkeleton rounded-md bg-linear-skeleton bg-skeleton-size"></div>
            <div className="tags w-1/3 mx-auto h-6 animate-colorSkeleton rounded-md bg-linear-skeleton bg-skeleton-size"></div>
            <div className="w-40 h-40 lg:h-52 lg:w-52 mx-auto animate-colorSkeleton bg-linear-skeleton bg-skeleton-size rotate-45 mt-10"></div>
          </div>
        </div>
        <div className="spells-lore flex flex-col gap-5">
          <div className="spells-container flex flex-col items-center justify-center w-full gap-3 lg:flex-row">
            <div className="spells w-full lg:w-1/2 flex flex-col items-center gap-3">
              <SubTitle subTitle="SPELLS" className="text-2xl mt-0" />
              <div className="spells-container flex items-center justify-center gap-2">
                {spellsCard.map((spell, i) => (
                  <div
                    key={i}
                    className="spells-card w-12 h-12 animate-colorSkeleton rounded-sm bg-linear-skeleton bg-skeleton-size"
                  ></div>
                ))}
              </div>
              <div className="img w-full h-48 lg:h-96 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            </div>
            <div className="lore w-full lg:w-1/2 lg:h-96 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
          </div>
        </div>
        <div className="skins flex flex-col gap-3">
          <SubTitle subTitle="SKINS" className="text-2xl" />
          <div className="w-full h-44 lg:w-full lg:h-96 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
        </div>
      </div>
    </main>
  );
}
