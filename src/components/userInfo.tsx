"use client";
import React from "react";
import UserData from "./partials/userData";
import ChampionMaestry from "./partials/championMaestry/championMaestry";
import TitleConfig from "./titleConfig";
import SummonerLatestMatches from "./summonerLatestMatches";
import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import useUserData from "@/hooks/useUserData";

interface UserInfoProps {
  summonerData: SummonerProps;
}

export default function UserInfo({ summonerData }: UserInfoProps) {
  const { setUserData } = useUserData();

  setUserData(summonerData);

  return (
    <div className="flex flex-col w-full px-3 default-bg md:w-9/12 xl:p-5 xl:flex-row xl:justify-center xl:gap-9">
      <div className="flex flex-col items-center mt-8 lg:mt-1">
        <UserData />

        <TitleConfig
          className={"mt-9 -mb- tracking-wider text-xl lg:text-2xl"}
          title="Top 10 Champions by Maestry"
        />
        <ChampionMaestry />
      </div>
      <div className="m-auto w-full xl:m-0 xl:w-1/2">
        <SummonerLatestMatches />
      </div>
    </div>
  );
}
