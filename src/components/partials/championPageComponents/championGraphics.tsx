"use client";
import { ChampionData } from "@/app/utils/@types/champions";
import React, { useEffect, useState } from "react";
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
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

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

  const renderFontSize = () => {
    const fontSize = windowSize <= 425 ? "10px" : "14px";

    return fontSize;
  };

  const renderCustomTick = ({ payload, x, y, textAnchor }: CustomTickProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 10;
    const angle = payload.coordinate;
    const cx = 200;
    const cy = 150;

    const adjustedX =
      windowSize <= 1024
        ? cx + (x - cx) * (0.9 + radius / 400)
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

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <div className="w-full h-60 md:h-80 lg:h-64 2xl:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="52%"
          style={{ fontSize: renderFontSize() }}
          data={GraphData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
          <PolarRadiusAxis angle={90} domain={[0, 10]} />
          <Radar
            name={championData.name}
            dataKey="A"
            stroke="#ffd60a"
            fill="#ffc300"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
