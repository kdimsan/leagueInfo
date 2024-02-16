import TitleConfig from "@/components/titleConfig";
import React from "react";

export default function loading() {
  const skeletonArrayFreeWeek = new Array(24).fill({});
  const skeletonArrayAllChampions = new Array(60).fill({});
  return (
    <div className="flex min-h-screen flex-col bg-neutral-800 rounded-md mt-8 xl:py-2 xl:px-20">
      <TitleConfig
        className={"lg:text-3xl mt-6"}
        title={"Free Week Rotation"}
      />
      <div className="grid grid-cols-2 justify-center items-center gap-7 mt-5 md:grid-cols-6 xl:grid-cols-11 xl:gap-x-10">
        {skeletonArrayFreeWeek.map((box, index) => (
          <div key={index}>
            <div className="lg:w-24 lg:h-24 bg-neutral-500 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            <div className="mt-2 lg:w-24 h-3 m-auto bg-neutral-500 rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
          </div>
        ))}
      </div>
      <TitleConfig
        className={"lg:text-3xl mt-6"}
        title={"League Of Legends Champions"}
      />
      <div className="grid grid-cols-2 justify-center items-center gap-7 mt-5 md:grid-cols-6 xl:grid-cols-11 xl:gap-x-10">
        {skeletonArrayAllChampions.map((box, index) => (
          <div key={index}>
            <div className="lg:w-24 lg:h-24 bg-neutral-500 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            <div className="mt-2 lg:w-24 h-3 m-auto bg-neutral-500 rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
          </div>
        ))}
      </div>
    </div>
  );
}
