import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface matchDataProps {
  matchData: {
    matchesArr: string;
    quantity: number;
    wins: number;
    losses: number;
    winRate: number;
  };
}

export default function WinRateGraphicsRender({ matchData }: matchDataProps) {
  const data = [
    { name: "Match Win", value: matchData.wins },
    { name: "Match Loss", value: matchData.losses },
  ];

  const colors = ["#036F00", "#8D0101"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={48} height={48}>
        <Pie
          dataKey="value"
          data={data}
          innerRadius={20}
          outerRadius={40}
          fill="#82ca9d"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
