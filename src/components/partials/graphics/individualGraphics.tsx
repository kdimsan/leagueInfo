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

interface CustomizedLabelProps extends PieLabelRenderProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const COLORS = ["#f4f1de", "#00C49F", "#3d405b", "#81b29a", "#f2cc8f"];

const CustomLegend = ({ participants, payload }: CustomLegendProps) => {
  return (
    <ul className="flex flex-col gap-y-1 justify-center absolute -top-24 -left-12 w-fit">
      {payload.map((entry, index) => (
        <li className="flex items-center gap-0.5" key={index}>
          <div className="w-4 h-4">
            <ChampionImage
              styles="w-4 h-4"
              championName={participants[index].championName}
            />
          </div>
          <span className="text-xs" style={{ color: `${entry.color}` }}>
            {participants[index].kills}
          </span>
          <span className="text-xs" style={{ color: `${entry.color}` }}>{`(${(
            entry.payload.percent * 100
          ).toFixed(0)}%)`}</span>
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
  console.log(totalKills);

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

  return (
    <div className="flex h-full items-center relative justify-center">
      <PieChart className="!absolute !left-10" width={120} height={128}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={40}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          height={10}
          content={
            <CustomLegend participants={participants} payload={dataForLegend} />
          }
        />
      </PieChart>
    </div>
  );
}
