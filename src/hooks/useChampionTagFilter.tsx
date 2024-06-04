import { ChampionTagFilter } from "@/contexts/championTagFilter";
import { useContext } from "react";

export default function useChampionTagFilter() {
  return useContext(ChampionTagFilter);
}
