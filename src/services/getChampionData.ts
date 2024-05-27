import { ChampionData } from "@/app/utils/@types/champions";
import { api } from "@/app/utils/api/api";

export interface ChampionDataResponse {
  data: ChampionData;
}

export async function getChampionData(championName: string) {
  try {
    const response: ChampionDataResponse = await api.post(`/champion_details`, {
      championName,
    });

    return { championData: response.data, championName: championName };
  } catch (err) {
    console.error("err", err);
  }
}
