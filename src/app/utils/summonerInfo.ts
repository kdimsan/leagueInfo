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

export interface SummonerProps {
  SUMMONER_DATA_RES: SummonerAccountProps;
  SUMMONER_RANKED_RES: SummonerRankedProps;
}
