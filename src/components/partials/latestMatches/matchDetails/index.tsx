import { MatchInfo } from "@/app/utils/@types/summonerMatches";
import React, { useState } from "react";

import MatchGraphics from "./matchGraphics";

import DetailsCard from "./detailsCard";

interface MatchDetailsCardProps {
  matchDetails: MatchInfo;
}

export default function MatchDetailsCard({
  matchDetails,
}: MatchDetailsCardProps) {
  const [cardContent, setCardContent] = useState("infos");

  const handleCardContent = (content: string) => {
    setCardContent(content);
  };
  return (
    <div className="card-details w-full justify-between relative">
      <div
        className={`flex items-center gap-2 bg-blue-team transition-all text-sm`}
      >
        <button
          className={`bg-blue-team px-2 py-1 transition-all 
          ${cardContent === "infos" ? "brightness-125" : ""} 
          ${cardContent !== "infos" ? "hover:brightness-150" : ""}
          `}
          onClick={() => handleCardContent("infos")}
        >
          Infos
        </button>

        <button
          className={`bg-blue-team px-2 py-1 transition-all
          ${cardContent === "graphics" ? "brightness-125" : ""}
          ${cardContent !== "graphics" ? "hover:brightness-150" : ""}
          `}
          onClick={() => handleCardContent("graphics")}
        >
          Graphics
        </button>
      </div>
      {cardContent === "infos" ? (
        matchDetails.teams.map((team) => (
          // eslint-disable-next-line react/jsx-key
          <DetailsCard team={team} matchDetails={matchDetails} />
        ))
      ) : (
        <MatchGraphics matchDetails={matchDetails} />
      )}
    </div>
  );
}
