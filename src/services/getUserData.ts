import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import { api } from "@/app/utils/api/api";

export async function getUserData(userName: string) {
  const [gameName, tagLine, accountRegion] = userName.split("-");

  try {
    const response: SummonerProps = (
      await api.get("/summoner", {
        params: {
          gameName: gameName,
          tagLine: tagLine,
          accountRegion: accountRegion,
        },
      })
    ).data;

    return response;
  } catch (err) {
    console.error(err);
  }
}
