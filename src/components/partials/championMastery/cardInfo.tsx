import { lastTimePlayedConverter } from "@/app/utils/formatters/timeCalculators";
import { formatMasteryValue } from "@/app/utils/formatters/masteryValue";
import { SummonerMasteryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";

type CardInfoProps = {
  champion: SummonerMasteryChampionsProps;
};

type InfosRenderProps = {
  textToShow: string;
  dataToShow: number | string;
};

const InfosRender = ({ textToShow, dataToShow }: InfosRenderProps) => {
  return (
    <div className="flex flex-col items-center text-xs">
      <span className="text-nowrap text-gray-300">{textToShow}</span>
      <span className="font-semibold">{dataToShow}</span>
    </div>
  );
};

export default function CardInfo({ champion }: CardInfoProps) {
  return (
    <div className="w-full -mt-2.5">
      <h4 className="m-auto text-center text-sm font-semibold border-b border-[#1b1d25]">
        {champion.championName}
      </h4>
      <div className="flex flex-col gap-1 mt-1">
        <InfosRender
          dataToShow={champion.championPoints}
          textToShow="Points:"
        />
        <InfosRender
          dataToShow={lastTimePlayedConverter(champion.lastPlayTime)}
          textToShow="Last played:"
        />
      </div>
    </div>
  );
}
