import { ChampionsProps } from "./champions";

export interface FreeWeekData {
  freeChampions: ChampionsProps[];
  freeChampionForNewPlayers: ChampionsProps[];
  maxNewPlayerLevel: number;
}
