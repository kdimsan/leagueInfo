"use client";
import { api } from "./utils/api/api";
import { useEffect, useState } from "react";
import FreeWeekSection from "@/components/partials/freeWeekSection";
import AllChampionsSection from "@/components/allChampionsSection";

export default function Home() {
  const [freeWeekData, setFreeWeekData] = useState();
  const [allChampionsData, setAllChampionsData] = useState();

  useEffect(() => {
    const handlePageData = async () => {
      await api.get("/free_week").then(function (response) {
        setFreeWeekData(response.data.freeWeekChampionsData);
        setAllChampionsData(response.data.championsRes);
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
