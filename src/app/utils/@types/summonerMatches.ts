export interface SummonerLatestMatchesProps {
  matchInfo: Info;
  participantsPuuid: string[];
}

export interface Info {
  gameMode: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  gameDuration: number;
  gameId: number;
  gameType: string;
  participants: Participant[];
  teams: Team[];
}

export interface Participant {
  assists: number;
  challenges: Challenges;
  champLevel: number;
  championId: number;
  championName: string;
  deaths: number;
  goldEarned: number;
  kills: number;
  lane: string;
  neutralMinionsKilled: number;
  profileIcon: number;
  puuid: string;
  riotIdGameName: string;
  riotIdTagline: string;
  role: string;
  summonerId: string;
  summonerLevel: number;
  teamId: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  totalMinionsKilled: number;
  visionScore: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

interface Challenges {
  goldPerMinute: number;
  kda: number;
  killParticipation: number;
}

interface Team {
  bans: any[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
}

interface Objectives {
  baron: Baron;
  champion: Champion;
  dragon: Dragon;
  horde: Horde;
  inhibitor: Inhibitor;
  riftHerald: RiftHerald;
  tower: Tower;
}

interface Baron {
  first: boolean;
  kills: number;
}

interface Champion {
  first: boolean;
  kills: number;
}

interface Dragon {
  first: boolean;
  kills: number;
}

interface Horde {
  first: boolean;
  kills: number;
}

interface Inhibitor {
  first: boolean;
  kills: number;
}

interface RiftHerald {
  first: boolean;
  kills: number;
}

interface Tower {
  first: boolean;
  kills: number;
}
