import { Participant, Team } from "@/app/utils/@types/summonerMatches";
import React from "react";
import { PieChart, Pie, Cell, Legend, PieLabelRenderProps } from "recharts";
import ChampionImage from "../championImage";

interface IndividualGraphicsProps {
  participants: Participant[];
}

interface CustomLegendProps {
  participants: Participant[];
  payload: {
    payload: any;
    value: string;
    color: string;
    percent: number;
  }[];
}

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const COLORS = ["#f4f1de", "#00C49F", "#00afb9", "#81b29a", "#f2cc8f"];

const CustomLegend = ({ participants, payload }: CustomLegendProps) => {
  return (
    <ul className="grid grid-cols-3 gap-0.5 -mb-1">
      {payload.map((entry, index) => (
        <li className=" flex items-center gap-0.5" key={index}>
          <div className="w-4 h-4">
            <ChampionImage
              styles="w-4 h-4"
              championName={participants[index].championName}
            />
          </div>
          <span className="text-xs" style={{ color: `${entry.color}` }}>
            {participants[index].kills}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default function IndividualGraphics({
  participants,
}: IndividualGraphicsProps) {
  const totalKills = participants.reduce(
    (acc, participant) => acc + participant.kills,
    0
  );

  const data = participants.map((participant) => {
    return {
      name: participant.championName,
      value: participant.kills,
    };
  });

  const dataForLegend = data.map((entry, index) => ({
    payload: {
      value: entry.name,
      color: COLORS[index % COLORS.length],
      percent: (entry.value / totalKills) * 100,
    },
    value: entry.name,
    color: COLORS[index % COLORS.length],
    percent: (entry.value / totalKills) * 100,
  }));

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: CustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + (radius + 22) * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + (radius + 25) * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        className="text-xs font-semibold"
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex h-full items-center relative justify-center">
      <PieChart className="" width={154} height={132}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={40}
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          align="center"
          content={
            <CustomLegend participants={participants} payload={dataForLegend} />
          }
        />
      </PieChart>
    </div>
  );
}
