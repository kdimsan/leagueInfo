import { createContext, useState } from "react";

interface ChampionTagFilterContextProps {
  championTagFilter: string;
  championNameFilter: string;
  setChampionTagFilter: React.Dispatch<React.SetStateAction<string>>;
  setChampionNameFilter: React.Dispatch<React.SetStateAction<string>>;
}

interface ChampionTagFilterProviderProps {
  children: React.ReactNode;
}

export const ChampionTagFilter = createContext<ChampionTagFilterContextProps>({
  championTagFilter: "",
  championNameFilter: "",
  setChampionTagFilter: () => {},
  setChampionNameFilter: () => {},
});

export function ChampionTagFilterProvider({
  children,
}: ChampionTagFilterProviderProps) {
  const [championTagFilter, setChampionTagFilter] = useState<string>("All");
  const [championNameFilter, setChampionNameFilter] = useState<string>("");

  return (
    <ChampionTagFilter.Provider
      value={{
        championTagFilter,
        championNameFilter,
        setChampionNameFilter,
        setChampionTagFilter,
      }}
    >
      {children}
    </ChampionTagFilter.Provider>
  );
}
