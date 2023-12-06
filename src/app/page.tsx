"use client";
import { api } from "./utils/api/api";
import { useEffect, useState } from "react";
import { SummonerProps } from "./utils/summonerInfo";
import UserData from "@/components/userData";
import UserRank from "@/components/userRank";
import ChampionMaestry from "@/components/championMaestry";
import FreeWeekRotation from "@/components/freeWeekRotation";
import { FreeWeekData } from "./utils/freeWeek";

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
    <main className=" flex flex-col flex-1 mt-8">
      <div className="flex flex-col items-center justify-center w-full">
        <input
          className="bg-slate-100 px-3 py-2 rounded-md text-white placeholder-neutral-400 mb-4"
          type="text"
          placeholder="Nickname"
        />
        <button
          className="px-12 py-2 border rounded-md bg-green-700"
          onClick={handleUserName}
        >
          Find
        </button>
      </div>

      {data && (
        <div className="flex flex-col items-center">
          <UserData data={data.SUMMONER_DATA_RES} />

          <div className="flex flex-col items-center  gap-4 justify-center mt-8 w-full ">
            {data.SUMMONER_RANKED_RES.map((item, index) => (
              <UserRank data={item} key={index} />
            ))}
          </div>
          <div className="mt-8">
            <h3 className=" mb-3 font-semibold w-fit mx-auto">
              Top 10 Maestry Champions
            </h3>
            {data.TOP_MAESTRY_CHAMPION.map((champ, index) => (
              <ChampionMaestry maestryData={champ} key={index} />
            ))}
          </div>
        </div>
      )}
      <h3 className="mt-8 mb-3">Free Week Rotation</h3>
      <div className="flex flex-col">
        {freeWeekData && <FreeWeekRotation freeweek={freeWeekData} />}
      </div>
    </main>
  );
}
