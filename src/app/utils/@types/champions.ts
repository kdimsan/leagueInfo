export interface ChampionsProps {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImages;
  tags: string[];
  partype: string;
  stats: ChampionStats;
}

export interface ApiResponse<T> {
  type: string;
  format: string;
  version: string;
  data: T;
}

export interface ChampionBase {
  championName: string;
  championId: string;
  championKey: number;
}

export interface ChampionData {
  id: string;
  key: string;
  name: string;
  title: string;
  skins: SkinsProps[];
  lore: string;
  blurb: string;
  tags: string[];
  info: ChampionInfo;
  stats: ChampionStats;
  spells: SpellsProps;
}

export interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface SpellsProps {
  id: string;
  name: string;
  description: string;
}

export interface SkinsProps {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface ChampionImages {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
}
