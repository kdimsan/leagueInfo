import { lastTimePlayedConverter } from "@/app/utils/formatters/timeCalculators";
import { formatMasteryValue } from "@/app/utils/formatters/masteryValue";
import { SummonerMasteryChampionsProps } from "@/app/utils/@types/summonerInfo";
import React from "react";

type CardInfoProps = {
  champion: SummonerMasteryChampionsProps;
};

type InfosRenderProps = {
  textToShow: string;
  dataNumber?: number;
  dataText?: string;
};

const InfosRender = ({
  textToShow,
  dataNumber,
  dataText,
}: InfosRenderProps) => {
  let numStr = dataNumber?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <div className="flex flex-col items-center text-xs font-montserrat ">
      <span className="text-nowrap text-gray-300">{textToShow}</span>
      <span className="font-semibold text-gray-200 tracking-wide">
        {dataText || numStr}
      </span>
    </div>
  );
};

export default function CardInfo({ champion }: CardInfoProps) {
  return (
    <div className="w-full -mt-2.5">
      <h4 className="m-auto text-center text-xs font-semibold text-gray-200 border-b border-[#1b1d25] overflow-hidden text-nowrap text-ellipsis">
        {champion.championName}
      </h4>
      <div className="flex flex-col gap-1 mt-1">
        <InfosRender
          dataNumber={champion.championPoints}
          textToShow="Points:"
        />
        <InfosRender
          dataText={lastTimePlayedConverter(champion.lastPlayTime)}
          textToShow="Last played:"
        />
      </div>
    </div>
  );
}
