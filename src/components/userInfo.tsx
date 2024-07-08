"use client";
import React from "react";
import UserData from "./partials/userData";
import ChampionMastery from "./partials/championMastery/championMastery";
import SummonerLatestMatches from "./summonerLatestMatches";
import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import useUserData from "@/hooks/useUserData";
import LatestChampions from "./partials/latestMatches/latestChampions/latestChampions";

interface UserInfoProps {
  summonerData: SummonerProps;
}

export default function UserInfo({ summonerData }: UserInfoProps) {
  const { setUserData } = useUserData();

  setUserData(summonerData);

  return (
    <div className="flex flex-col w-full p-3 gap-7 default-bg md:w-9/12 xl:p-5 xl:flex-row xl:justify-center xl:gap-9">
      <section className="flex flex-col items-center gap-12 xl:w-1/2 2xl:w-2/5">
        <UserData />

        <ChampionMastery />
        <LatestChampions />
      </section>
      <section className="m-auto w-full xl:m-0 xl:w-1/2 ">
        <SummonerLatestMatches />
      </section>
    </div>
  );
}
