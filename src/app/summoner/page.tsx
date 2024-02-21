"use client";
import UserInfo from "@/components/userInfo";
import useUserData from "@/hooks/useUserData";
import { getUserData } from "@/services/getUserData";
import React, { Suspense, useEffect } from "react";
import { SummonerProps } from "../utils/@types/summonerInfo";

type UserDataProps = {
  userName: string[];
  setUserData: React.Dispatch<React.SetStateAction<SummonerProps | null>>;
};

const UserData = async ({ userName, setUserData }: UserDataProps) => {
  const summoner = await getUserData(userName);
  if (summoner) {
    setUserData(summoner);
  }
};

export default function SummonerPage() {
  const { userName, userData, setUserData } = useUserData();

  useEffect(() => {
    async function fetchData() {
      await UserData({ userName, setUserData });
    }
    fetchData();
  }, []);

  return (
    <main className="mt-5">
      <Suspense fallback={<div>Loading...</div>}>
        <UserInfo />
      </Suspense>
    </main>
  );
}
