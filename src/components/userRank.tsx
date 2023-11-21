import { SummonerRankedProps } from "@/app/utils/summonerInfo";
import React from "react";

interface UserRankProps {
  data: SummonerRankedProps[];
}

export default function UserRank({ data }: UserRankProps) {
  console.log("data", data);

  return (
    <div className="flex flex-col gap-7 w-full">
      {data.map((res, i) => (
        <div key={i}>
          {res.queueType === "RANKED_FLEX_SR" && (
            <div>
              <h4>Ranked Flex</h4>
              <div>
                <p>
                  {res.tier} {res.rank}
                </p>
              </div>
              <p>League points: {res.leaguePoints}</p>
              <span>
                {res.wins}/{res.losses} winrate:{" "}
                {((res.wins / res.losses) * 100).toFixed(2)}
              </span>
            </div>
          )}

          {res.queueType === "RANKED_SOLO_5x5" && (
            <div>
              <p>Ranked Solo-Duo</p>
              <p>{res.wins}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
