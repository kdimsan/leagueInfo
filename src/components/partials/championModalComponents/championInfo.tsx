import { ChampionData } from "@/app/utils/@types/champions";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ChampionInfoProps {
  championData: ChampionData;
}

type CustomTickProps = {
  payload: any;
  x: number;
  y: number;
  textAnchor: any;
};

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

  const renderCustomTick = ({ payload, x, y, textAnchor }: CustomTickProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 10;
    const angle = payload.coordinate;
    const cx = 200;
    const cy = 150;
    const screenSize = screen.width;

    const adjustedX =
      screenSize <= 1024
        ? cx + (x - cx) * (0.93 + radius / 400)
        : cx + (x - cx) * (0.93 + radius / 150);
    const adjustedY = cy + (y - cy) * (1.02 + radius / 150);

    return (
      <text
        x={adjustedX}
        y={adjustedY}
        textAnchor={textAnchor}
        fill={"#eeeeee"}
        dy={4}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full h-64 my-5 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="52%" data={GraphData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
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
