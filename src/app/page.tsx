"use client";
import { api } from "./utils/api/api";
import { useEffect, useState } from "react";

import { FreeWeekData } from "./utils/freeWeek";

import FreeWeekSection from "@/components/partials/freeWeekSection";
import UserInfo from "@/components/userInfo";
import useUserData from "@/hooks/useUserData";

export default function Home() {
  const { userData } = useUserData();

  const [freeWeekData, setFreeWeekData] = useState<FreeWeekData>();

  useEffect(() => {
    const handlePageData = async () => {
      await api.get("/free_week").then(function (response) {
        setFreeWeekData(response.data);
      });
    };

    handlePageData();
  }, []);

  return (
    <main className=" flex flex-col flex-1 mt-8 xl:flex-row xl:justify-around">
      {userData && <UserInfo userData={userData} />}
      {freeWeekData && <FreeWeekSection data={freeWeekData} />}
    </main>
  );
}
