import { api } from "@/app/utils/api/api";
import useUserData from "@/hooks/useUserData";
import React, { useState } from "react";

export default function FindSummonerInput() {
  const { setUserData } = useUserData();

  const [riotId, setRiotId] = useState({ gameName: "", tagLine: "" });

  const handleRiotId = (e: string) => {
    const [gameName, tagLine] = e.split(" #");
    setRiotId({ gameName, tagLine });
  };

  const handleUserNameData = async () => {
    try {
      const response = await api.get("/summoner", {
        params: {
          gameName: riotId.gameName,
          tagLine: riotId.tagLine,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 rounded-md w-1/3">
      <input
        className="w-full px-3 py-2 bg-slate-100 rounded-l-md placeholder-neutral-400  text-black"
        type="text"
        placeholder="Game Name+ #TagLine"
        onChange={(e) => handleRiotId(e.target.value)}
      />
      <button
        className="px-2 py-2 rounded-r-md bg-green-700 "
        onClick={handleUserNameData}
      >
        F
      </button>
    </div>
  );
}
