import { createContext, useState } from "react";

interface ChampionTagFilterContextProps {
  championTagFilter: string;
  setChampionTagFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface ChampionTagFilterProviderProps {
  children: React.ReactNode;
}

export const ChampionTagFilter = createContext<ChampionTagFilterContextProps>({
  championTagFilter: "",
  setChampionTagFilter: () => {},
});

export function ChampionTagFilterProvider({
  children,
}: ChampionTagFilterProviderProps) {
  const [championTagFilter, setChampionTagFilter] = useState<string>("All");

  return (
    <ChampionTagFilter.Provider
      value={{ championTagFilter, setChampionTagFilter }}
    >
      {children}
    </ChampionTagFilter.Provider>
  );
}
