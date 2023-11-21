"use client";
import { api } from "./utils/api/api";
import { useState } from "react";
import { SummonerProps } from "./utils/summonerInfo";
import UserData from "@/components/userData";
import UserRank from "@/components/userRank";

export default function Home() {
  const [data, setData] = useState<SummonerProps>();

  const handleUserName = async () => {
    await api
      .get("/summoner")
      .then(function (response) {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(data);

  return (
    <main className=" flex flex-col flex-1 mt-8">
      <div className="flex flex-col items-center justify-center w-full">
        <input
          className="bg-neutral-500 px-3 py-2 rounded-md text-white placeholder-neutral-400 mb-4"
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
        <div>
          <UserData data={data.SUMMONER_DATA_RES} />
          <UserRank data={data.SUMMONER_RANKED_RES} />
        </div>
      )}
    </main>
  );
}
