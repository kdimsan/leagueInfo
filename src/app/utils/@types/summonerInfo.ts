import { SummonerLatestMatchesProps } from "./summonerMatches";

export interface SummonerAccountProps {
  gameName: string;
  tagLine: string;
  profileIconId: number;
  puuid: string;
  summonerLevel: number;
  id: string;
  revisionDate: number;
}

export interface SummonerRankedProps {
  leagueId: string;
  leaguePoints: number;
  queueType: string;
  wins: number;
  losses: number;
  rank: string;
  tier: string;
  freshBlood?: boolean;
  hotStreak?: boolean;
}

export interface SummonerMasteryChampionsProps {
  championId: string;
  championName: string;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  chestGranted: boolean;
}

export interface SummonerProps {
  summonerData: SummonerAccountProps;
  summonerRankedData: SummonerRankedProps[];
  summonerMasteryChampionsData: SummonerMasteryChampionsProps[];
  summonerLatestMatchesData: SummonerLatestMatchesProps[];
}
