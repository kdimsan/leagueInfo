"use client";
import { ChampionsProps } from "@/app/utils/@types/champions";

import { ChampionSectionDefault } from "./allChampionsSection";

interface FreeWeekSectionProps {
  data: ChampionsProps[];
}

export default function FreeWeekSection({ data }: FreeWeekSectionProps) {
  return ChampionSectionDefault(data, "Free Week Rotation");
}
