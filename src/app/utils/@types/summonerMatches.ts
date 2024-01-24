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
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  lane: string;
  neutralMinionsKilled: number;
  perks: Perks;
  profileIcon: number;
  puuid: string;
  riotIdGameName: string;
  riotIdTagline: string;
  role: string;
  summonerId: string;
  summoner1Id: number;
  summoner2Id: number;
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

interface Perks {
  statPerks: StatPerks;
  styles: Style[];
}

interface StatPerks {
  defense: number;
  flex: number;
  offense: number;
}

interface Style {
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
