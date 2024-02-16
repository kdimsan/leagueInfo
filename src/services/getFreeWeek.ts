import { FreeWeekDataRes } from "@/app/utils/@types/freeWeek";
import { api } from "@/app/utils/api/api";
import { error } from "console";

export type GetFreeWeek = {
  FreeWeekData: FreeWeekDataRes;
};

export async function getFreeWeek(): Promise<GetFreeWeek> {
  try {
    const freeWeekResponse: FreeWeekDataRes = (await api.get("/free_week"))
      .data;

    return {
      FreeWeekData: freeWeekResponse,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
