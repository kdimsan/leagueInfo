import TitleConfig from "@/components/titleConfig";
import React from "react";

export default function Loading() {
  const skeletonArrayMastery = new Array(10).fill({});
  const skeletonArrayMatches = new Array(20).fill({});
  return (
    <div className="flex flex-col m-auto w-full px-3 default-bg md:w-9/12 xl:p-5 xl:flex-row xl:justify-center xl:gap-9">
      <div className="user-area flex flex-col h-full items-center mx-auto w-fit flex-1">
        <div
          className="summoner-info flex m-auto flex-col items-center justify-center w-full gap-5 bg-neutral-600 py-4 rounded-md mt-8
          lg:flex-row lg:px-5 lg:w-96 lg:items-center lg:justify-between"
        >
          <div className="flex items-center justify-center px-24 lg:w-44">
            <div
              className="w-28 h-28 rounded-md animate-colorSkeleton bg-linear-skeleton bg-skeleton-size
          relative after:content[''] after:absolute after:right-0 after:-bottom-2.5 after:h-0.5 after:w-full
          lg:after:content-[''] lg:after:-right-6 lg:after:top-0 lg:after:w-0.5 lg:after:h-full after:bg-neutral-800"
            ></div>
          </div>
          <div>
            <div className="flex flex-col gap-3 w-36">
              <div className="flex flex-col items-end gap-y-3 border-neutral-800">
                <div className="w-full rounded-md h-8 bg-neutral-500 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
                <div className="w-full rounded-md h-8 bg-neutral-500 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mastery-info">
          <TitleConfig
            className={"mt-9 -mb-1 text-xl lg:text-2xl"}
            title="Top 10 Champions by Mastery"
          />
          <div className="mastery-content">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4">
              {skeletonArrayMastery.map((data, i) => (
                <div key={i} className="">
                  <div className="flex flex-col items-center mt-4">
                    <div className="w-full max-w-xs flex gap-3 bg-neutral-700 rounded-md py-2 px-3 lg:max-w-sm">
                      <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size w-20 h-20 m-auto rounded-md"></div>
                      <div className="flex flex-col gap-1 w-3/4 text-[12px]">
                        <div className="flex items-center justify-center w-full border-b mb-2 border-zinc-900">
                          <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-4 w-1/2 mb-2"></div>
                        </div>
                        <div className="mastery-lvl flex gap-1 items-center">
                          <p className="whitespace-nowrap">Mastery Level:</p>
                          <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-12"></div>
                        </div>
                        <div className="mastery-points flex gap-1 items-center">
                          <p>Points:</p>
                          <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-12"></div>
                        </div>
                        <div className="mastery-played flex gap-1 items-center">
                          <p>Last played: </p>
                          <div className="animate-colorSkeleton bg-linear-skeleton bg-skeleton-size h-3 w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="last-champions-container">
            <div>
              <TitleConfig
                className={"mt-9 -mb-1 text-xl lg:text-2xl"}
                title="Top 10 Champions by Mastery"
              />
            </div>
            <div className="last-champions-content rounded-md w-full h-64 animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
          </div>
        </div>
      </div>
      <div className="match-area m-auto w-full py-2 xl:m-0 xl:w-1/2">
        <div className="w-full flex flex-col gap-5">
          <div className=" flex flex-col items-center gap-5">
            <TitleConfig
              className={"mt-9 -mb-1 text-xl lg:text-2xl"}
              title="Latest 20 matches"
            />
            <div>
              <div className="w-24 h-24 rounded-full animate-colorSkeleton bg-linear-skeleton bg-skeleton-size"></div>
            </div>
          </div>
          {skeletonArrayMatches.map((data, i) => (
            <div
              className={`card-container flex justify-between gap-4 mb-2 px-4 py-3 rounded-lg h-36 
              animate-colorSkeleton bg-linear-skeleton bg-skeleton-size`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
