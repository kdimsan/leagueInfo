"use client";
import { SummonerProps } from "@/app/utils/summonerInfo";
import { ReactNode, createContext, useState } from "react";

interface UserContextType {
  userData: SummonerProps | null;
  setUserData: React.Dispatch<React.SetStateAction<SummonerProps | null>>;
}

interface UserContextProviderType {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});

export function UserContextProvider({ children }: UserContextProviderType) {
  const [userData, setUserData] = useState<SummonerProps | null>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
