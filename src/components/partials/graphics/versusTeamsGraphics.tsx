import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface VersusTeamsGraphicsProps {
  blueTeamData: number;
  redTeamData: number;
}

interface CustomLegendProps {
  props: {
    valueA: number;
    valueB: number;
    color: string;
  }[];
}

const COLORS = ["#113066", "#580D0D"];
const CustomLegend = (props: CustomLegendProps) => (
  <ul className="flex items-center w-full">
    {props.props.map((entry, index) => (
      <li
        className="flex items-center justify-around w-full text-xs font-bold"
        key={index}
      >
        <span className="brightness-110" style={{ color: `${COLORS[0]}` }}>
          {entry.valueA}
        </span>
        <span className="brightness-110" style={{ color: `${COLORS[1]}` }}>
          {entry.valueB}
        </span>
      </li>
    ))}
  </ul>
);

export default function VersusTeamsGraphics({
  blueTeamData,
  redTeamData,
}: VersusTeamsGraphicsProps) {
  const data = [{ name: "Data", blueTeam: blueTeamData, redTeam: redTeamData }];

  const dataForLegend = data.map((entry, index) => ({
    valueA: entry.blueTeam,
    valueB: entry.redTeam,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <BarChart width={154} height={40} data={data} layout="vertical">
      <XAxis hide type="number" domain={[0, "dataMax"]} />
      <YAxis hide type="category" />
      <Bar dataKey="blueTeam" stackId="a" fill={COLORS[0]} />
      <Bar dataKey="redTeam" stackId="a" fill={COLORS[1]} />
      <Legend content={<CustomLegend props={dataForLegend} />} />
    </BarChart>
  );
}
