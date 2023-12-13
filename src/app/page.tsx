"use client";
import { api } from "./utils/api/api";
import { useEffect, useState } from "react";

import { SummonerProps } from "./utils/summonerInfo";
import { FreeWeekData } from "./utils/freeWeek";

import FindSummonerInput from "@/components/partials/findSummonerInput";
import FreeWeekSection from "@/components/partials/freeWeekSection";
import UserInfo from "@/components/userInfo";

export default function Home() {
  const [data, setData] = useState<SummonerProps>();
  const [freeWeekData, setFreeWeekData] = useState<FreeWeekData>();

  useEffect(() => {
    const handlePageData = async () => {
      await api.get("/free_week").then(function (response) {
        setFreeWeekData(response.data);
      });
    };

    handlePageData();
  }, []);

  const handleUserName = async () => {
    await api
      .get("/summoner")
      .then(function (response) {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className=" flex flex-col flex-1 mt-8 xl:flex-row xl:justify-around">
      <div className="">
        <div>
          <FindSummonerInput onClick={handleUserName} />
        </div>
        {data && <UserInfo userData={data} />}
      </div>
      <div className="">
        {freeWeekData && <FreeWeekSection data={freeWeekData} />}
      </div>
    </main>
  );
}
