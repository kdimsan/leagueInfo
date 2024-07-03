import TitleConfig from "@/components/titleConfig";
import React from "react";

export default function loading() {
  const skeletonArrayFreeWeek = new Array(20).fill({});
  const skeletonArrayAllChampions = new Array(60).fill({});
  return (
    <main className="w-full flex flex-col items-center mt-36 gap-12 justify-center lg:gap-16">
      <section className="fw default-bg m-auto flex flex-col items-center py-3">
        <TitleConfig
          className={"text-2xl tracking-wider md:text-3xl"}
          title={"Free Week Rotation"}
        />
        <div className="grid grid-cols-3 items-center justify-center gap-4 rounded-md xl:py-6 xl:px-20 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-11">
          {skeletonArrayFreeWeek.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20  rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
              <div className="mt-2 w-16 lg:w-20 h-3 m-auto  rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
            </div>
          ))}
        </div>
      </section>
      <section className="champions default-bg m-auto flex flex-col items-center">
        <TitleConfig
          className={"text-2xl tracking-wider md:text-3xl"}
          title={"Free Week Rotation"}
        />
        <div className="grid grid-cols-3 items-center justify-center gap-3 rounded-md xl:py-6 xl:px-20 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-11">
          {skeletonArrayAllChampions.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20  rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
              <div className="mt-2 w-16 lg:w-20 h-3 m-auto  rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
