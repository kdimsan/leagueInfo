import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import { api } from "@/app/utils/api/api";
import useUserData from "@/hooks/useUserData";

export async function getUserData(userName: string) {
  const [gameName, tagLine, region] = userName.split("-");

  try {
    const response: SummonerProps = (
      await api.get("/summoner", {
        params: {
          gameName: gameName,
          tagLine: tagLine,
          region: region,
        },
      })
    ).data;

    return response;
  } catch (err) {
    console.log(err);
  }
}
