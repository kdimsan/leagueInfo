import React from "react";
import FreeWeekContent from "./freeWeekContent";
import { FreeWeekData } from "@/app/utils/freeWeek";
import TitleConfig from "../titleConfig";

interface FreeWeekSectionProps {
  data: FreeWeekData;
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  return (
    <div className="">
      <TitleConfig className={"text-xl"} title={"Free Week Rotation"} />
      <div className="flex flex-col justify-center items-center mt-6">
        <FreeWeekContent freeweek={data} />
      </div>
    </div>
  );
}
