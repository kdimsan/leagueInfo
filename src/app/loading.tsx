import TitleConfig from "@/components/titleConfig";
import React from "react";

export default function loading() {
  const skeletonArrayFreeWeek = new Array(24).fill({});
  const skeletonArrayAllChampions = new Array(60).fill({});
  return (
    <div className="flex min-h-screen flex-col ">
      <TitleConfig
        className={"lg:text-3xl mt-6"}
        title={"Free Week Rotation"}
      />
      <div className="grid grid-cols-2 justify-center items-center gap-7 bg-neutral-800 rounded-md xl:py-6 xl:px-20 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-11">
        {skeletonArrayFreeWeek.map((box, index) => (
          <div key={index}>
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-neutral-500 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            <div className="mt-2 lg:w-24 h-3 m-auto bg-neutral-500 rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
          </div>
        ))}
      </div>
      <TitleConfig
        className={"lg:text-3xl mt-6"}
        title={"League Of Legends Champions"}
      />
      <div className="grid grid-cols-2 justify-center items-center m-auto gap-7 bg-neutral-800 rounded-md xl:py-6 xl:px-20 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-11">
        {skeletonArrayAllChampions.map((box, index) => (
          <div key={index}>
            <div className=" lg:w-24 lg:h-24 bg-neutral-500 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            <div className="mt-2 lg:w-24 h-3 m-auto bg-neutral-500 rounded-sm animate-colorSkeleton bg-linear-skeleton bg-skeleton-size "></div>
          </div>
        ))}
      </div>
    </div>
  );
}
