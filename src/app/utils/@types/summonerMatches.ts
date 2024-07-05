import { ChampionBase } from "./champions";

export interface SummonerLatestMatchesProps {
  matchInfo: MatchInfo;
  participantsPuuid: string[];
}

export interface MatchInfo {
  gameMode: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  gameDuration: number;
  gameId: number;
  gameType: string;
  participantsData: Participant[];
  queueType: QueueFormatedProps;
  teams: Team[];
  searchSummonerData: SearchSummonerData;
}

export interface QueueFormatedProps {
  queueDescription: string;
  map: string;
  notes: string;
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
  perks: Runes;
  profileIcon: number;
  puuid: string;
  riotIdGameName: string;
  riotIdTagline: string;
  role: string;
  summonerId: string;
  summonerSpell1: number;
  summonerSpell2: number;
  summonerLevel: number;
  teamId: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  totalMinionsKilled: number;
  totalFarm: number;
  items: number[];
  visionScore: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

export interface Runes {
  mainRune: number;
  secondaryRuneStyle: number;
}

export interface Challenges {
  goldPerMinute: number;
  kda: number;
  killParticipation: number;
  gameLength: number;
}

interface Perks {
  statPerks: StatPerks;
  styles: Style[];
}

interface StatPerks {
  defense: number;
  flex: number;
  offense: number;
}

export interface Style {
  description: string;
  selections: Selection[];
  style: number;
}

interface Selection {
  perk: number;
  var1: number;
  var2: number;
  var3: number;
}

export interface Team {
  bans: ChampionBase[];
  objectives: Objectives[];
  teamId: number;
  win: boolean;
}

export interface Objectives {
  name: string;
  kills: number;
}

export interface SearchSummonerData {
  puiid: string;
  championName: string;
  win: boolean;
  lane: string;
  role: string;
}
