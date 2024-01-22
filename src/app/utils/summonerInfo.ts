export interface SummonerAccountProps {
  name: string;
  profileIconId: number;
  puuid: string;
  summonerLevel: number;
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

export interface SummonerMaestryChampionsProps {
  championId: number;
  championName: string;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  chestGranted: boolean;
}

export interface SummonerProps {
  summonerData: SummonerAccountProps;
  summonerRankedData: SummonerRankedProps[];
  summonerMaestryChampionsData: SummonerMaestryChampionsProps[];
}
