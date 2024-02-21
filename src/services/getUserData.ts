import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import { api } from "@/app/utils/api/api";

export async function getUserData(userName: string[]) {
  try {
    console.log("dentro", userName);

    const response: SummonerProps = (
      await api.get("/summoner", {
        params: {
          gameName: userName[0],
          tagLine: userName[1],
          region: userName[2],
        },
      })
    ).data;
    console.log(response);

    return response;
  } catch (err) {
    console.log(err);
  }
}
