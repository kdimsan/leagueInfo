import UserInfo from "@/components/userInfo";
import { getUserData } from "@/services/getUserData";
import React from "react";

interface SummonerProps {
  params: ParamsProps;
}

interface ParamsProps {
  user: string;
}

export default async function Summoner({ params }: SummonerProps) {
  const summonerParam = params.user;

  const summonerData = await getUserData(summonerParam);

  if (!summonerData) {
    return <div>No summoner Data</div>;
  }

  return (
    <main className="mt-5 flex justify-center items-center">
      <UserInfo summonerData={summonerData} />
    </main>
  );
}
