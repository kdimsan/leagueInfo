import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface matchDataProps {
  matchData: {
    win: number;
    loss: number;
  };
}

export default function RoleGraphics({ matchData }: matchDataProps) {
  const data = [
    { name: "Win", value: matchData.win },
    { name: "Loss", value: matchData.loss },
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
