import React from "react";
import SubTitle from "../subTitle/subTitle";

interface ChampionLoreProps {
  championLore: string;
  championAllyTips: string[];
  championEnemyTips: string[];
}

const ChampionText = ({
  championText,
  title,
  championTextArray,
}: {
  championText?: string;
  title: string;
  championTextArray?: string[];
}) => (
  <div>
    <div>
      <SubTitle subTitle={title} className="text-xl" />
    </div>
    <div className="px-1">
      {championText ? (
        <p className="text-sm text-justify">{championText}</p>
      ) : championTextArray?.length ? (
        championTextArray?.map((text, i) => (
          <p className="text-sm text-justify my-1" key={i}>
            {text}
          </p>
        ))
      ) : (
        <p className="text-sm text-justify my-1">-</p>
      )}
    </div>
  </div>
);

export default function ChampionLore({
  championLore,
  championAllyTips,
  championEnemyTips,
}: ChampionLoreProps) {
  return (
    <div className="w-full">
      <div className="border-1 flex flex-col justify-between h-full border-neutral-900 py-1 px-3 rounded-md shadow-[1px_1px_6px_3px_rgba(0,0,0,0.2)]">
        <ChampionText championText={championLore} title="LORE" />
        <ChampionText championTextArray={championAllyTips} title="ALLY TIPS" />
        <ChampionText
          championTextArray={championEnemyTips}
          title="ENEMY TIPS"
        />
      </div>
    </div>
  );
}
