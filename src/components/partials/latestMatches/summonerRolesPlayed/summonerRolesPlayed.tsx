import {
  MatchInfo,
  SummonerLatestMatchesProps,
} from "@/app/utils/@types/summonerMatches";
import useUserData from "@/hooks/useUserData";
import React from "react";
import SubTitle from "../../subTitle/subTitle";
import RoleGraphics from "./roleGraphics";
import Image from "next/image";

export default function SummonerRolesPlayed() {
  const { userData } = useUserData();

  const countRolesPlayed = (data: SummonerLatestMatchesProps[] | undefined) => {
    const countMap: {
      [key: string]: {
        [subKey: string]: {
          count: number;
          win: number;
          loss: number;
          lane: string;
        };
      };
    } = Object.create(null);

    if (data === undefined) {
      return;
    }

    for (const element of data) {
      const queueDescription = element.matchInfo.queueType.queueDescription;
      const role = element.matchInfo.searchSummonerData.role;
      const lane = element.matchInfo.searchSummonerData.lane;
      const isWin = element.matchInfo.searchSummonerData.win;

      if (!countMap[queueDescription]) {
        countMap[queueDescription] = Object.create(null);
      }

      if (!countMap[queueDescription][role]) {
        countMap[queueDescription][role] = {
          count: 0,
          win: 0,
          loss: 0,
          lane: lane,
        };
      }

      countMap[queueDescription][role].count += 1;
      if (isWin) {
        countMap[queueDescription][role].win += 1;
      } else {
        countMap[queueDescription][role].loss += 1;
      }
    }

    return Object.entries(countMap).map(([queueDescription, roles]) => ({
      [queueDescription]: Object.entries(roles).map(
        ([role, { count, win, loss, lane }]) => ({
          role: role,
          count: count,
          loss: loss,
          win: win,
          lane: lane,
          winRate: (win / count) * 100,
        })
      ),
    }));
  };

  const initializer = countRolesPlayed(
    userData?.summonerLatestMatchesData
  )?.map((queue, i) => {
    const renderedQueues = Object.entries(queue).map(
      ([queueDescription, roles], index) => {
        if (
          roles.length === 0 ||
          queueDescription === "ARAM" ||
          queueDescription === "Arena"
        ) {
          return null;
        }

        return (
          <div
            key={index}
            className="w-fit flex flex-wrap items-center justify-center"
          >
            <div className="flex flex-col items-center gap-1.5">
              <SubTitle
                subTitle={queueDescription}
                className="!mt-0 !text-sm"
              />
              <div className="flex gap-6 flex-wrap items-center justify-center">
                {roles.map((role, roleIndex) => (
                  <div className="flex" key={roleIndex}>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium">
                        <span className="text-[10px]">
                          {role.role === "BOTTOM" ? "CARRY" : role.role}
                        </span>
                        <Image
                          src={`/roleIcons/${role.role}.png`}
                          width={22}
                          height={22}
                          alt="Lane Icon"
                          unoptimized
                        />
                      </div>

                      <div className="graphic w-24 h-24 relative -mt-1">
                        <RoleGraphics matchData={role} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <span
                            className={`text-xs ${
                              role.winRate > 50
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {role.winRate.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-1">
                        <span className="text-xs">Total: {role.count}</span>
                        <span
                          className={`text-xs ${
                            role.winRate > 50
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          ({role.win}/{role.loss})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    );
    const hasContent = renderedQueues.some((queue) => queue !== null);

    if (!hasContent) {
      return (
        <div
          className="content w-fit h-[170px] flex flex-wrap items-center default-bg p-1 shadow-[0px_0px_5px_1px_rgba(17,17,17,1)]"
          key={i}
        >
          <span>Match Without Role</span>
        </div>
      );
    }

    return (
      <div
        className="content flex flex-wrap items-center default-bg p-1 shadow-[0px_0px_5px_1px_rgba(17,17,17,1)]"
        key={i}
      >
        {renderedQueues}
      </div>
    );
  });

  return (
    <div className="container flex flex-wrap justify-center gap-4">
      {initializer}
    </div>
  );
}
