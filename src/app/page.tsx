"use client";
import { api } from "./utils/api/api";
import { useEffect, useState } from "react";
import { FreeWeekData } from "./utils/freeWeek";
import FreeWeekSection from "@/components/partials/freeWeekSection";
import AllChampionsSection from "@/components/allChampionsSection";
import { ChampionsProps } from "./utils/champions";

export default function Home() {
  const [freeWeekData, setFreeWeekData] = useState<FreeWeekData>();
  const [allChampionsData, setAllChampionsData] = useState<ChampionsProps[]>();

  useEffect(() => {
    const handlePageData = async () => {
      await api.get("/free_week").then(function (response) {
        setFreeWeekData(response.data.FREE_WEEK_RES);
        setAllChampionsData(response.data.ALL_CHAMPIONS_ARRAY);
      });
    };
    handlePageData();
  }, []);

  return (
    <main className=" flex flex-col flex-1 justify-center mt-8">
      {freeWeekData && <FreeWeekSection data={freeWeekData} />}
      {allChampionsData && <AllChampionsSection data={allChampionsData} />}
    </main>
  );
}
