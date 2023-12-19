import React from "react";
import FreeWeekRotation from "./freeWeekRotation";
import { FreeWeekData } from "@/app/utils/freeWeek";
import TitleConfig from "../titleConfig";

interface FreeWeekSectionProps {
  data: FreeWeekData;
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  return (
    <div className="">
      <TitleConfig title={"Free Week Rotation"} />
      <div className="flex flex-col">
        <FreeWeekRotation freeweek={data} />
      </div>
    </div>
  );
}
