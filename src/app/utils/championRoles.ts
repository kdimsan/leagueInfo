export interface ChampionRolesOption {
  readonly value: string;
  readonly label: string;
}

export const championRolesOptions: readonly ChampionRolesOption[] = [
  { value: "All", label: "All Roles" },
  { value: "Assassin", label: "Assassin" },
  { value: "Fighter", label: "Fighter" },
  { value: "Mage", label: "Mage" },
  { value: "Marksman", label: "Marksman" },
  { value: "Support", label: "Support" },
  { value: "Tank", label: "Tank" },
];
