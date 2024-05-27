import { ChampionData } from "@/app/utils/@types/champions";
import { api } from "@/app/utils/api/api";

interface ChampionDataResponse {
  data: ChampionData;
}

export async function getChampionData(championName: string) {
  try {
    const response: ChampionDataResponse = await api.post(`/champion_details`, {
      championName,
    });

    return response.data;
  } catch (err) {
    console.error("err", err);
  }
}
