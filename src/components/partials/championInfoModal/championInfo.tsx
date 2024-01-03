import { ChampionData } from "@/app/utils/champions";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ChampionInfoProps {
  championData: ChampionData;
}

export default function ChampionInfo({ championData }: ChampionInfoProps) {
  const GraphData = [
    {
      subject: "Attack",
      A: championData.info.attack,
      fullMark: 10,
    },
    {
      subject: "Defense",
      A: championData.info.defense,
      fullMark: 10,
    },
    {
      subject: "Magic",
      A: championData.info.magic,
      fullMark: 10,
    },
    {
      subject: "Difficulty",
      A: championData.info.difficulty,
      fullMark: 10,
    },
  ];

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="55%" data={GraphData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 10]} />
          <Radar
            name={championData.name}
            dataKey="A"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
