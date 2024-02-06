import React from "react";
import FreeWeekContent from "./freeWeekContent";
import { FreeWeekData } from "@/app/utils/@types/freeWeek";
import TitleConfig from "../titleConfig";

interface FreeWeekSectionProps {
  data: FreeWeekData;
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <TitleConfig className={"lg:text-3xl"} title={"Free Week Rotation"} />
      <FreeWeekContent freeweek={data} />
    </div>
  );
}
