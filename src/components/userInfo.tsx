"use client";
import React from "react";
import UserData from "./partials/userData";
import ChampionMastery from "./partials/championMastery/championMastery";
import SummonerLatestMatches from "./summonerLatestMatches";
import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import useUserData from "@/hooks/useUserData";
import LatestChampions from "./partials/latestMatches/latestChampions/latestChampions";
import LatestMatchesContainer from "./partials/latestMatches/latestMatchesContainer";

interface UserInfoProps {
  summonerData: SummonerProps;
}

export default function UserInfo({ summonerData }: UserInfoProps) {
  const { setUserData } = useUserData();

  setUserData(summonerData);

  return (
    <div className="flex flex-col w-full p-3 gap-7 default-bg md:w-9/12 xl:p-5">
      <section className="flex flex-col gap-5 h-full flex-1 flex-grow xl:flex-row xl:items-stretch">
        <div className="w-full flex flex-col gap-6 h-auto flex-1">
          <UserData />
          <ChampionMastery />
        </div>
        <div className="w-full flex flex-col gap-6 h-auto flex-1">
          <SummonerLatestMatches />
          <LatestChampions />
        </div>
      </section>
      <section className="m-auto w-full">
        <LatestMatchesContainer />
      </section>
    </div>
  );
}
