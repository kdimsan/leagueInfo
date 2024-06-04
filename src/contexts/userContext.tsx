import { SummonerProps } from "@/app/utils/@types/summonerInfo";
import { ReactNode, createContext, useState } from "react";

interface UserContextType {
  userData: SummonerProps | null;
  setUserData: React.Dispatch<React.SetStateAction<SummonerProps | null>>;
  setUserName: React.Dispatch<React.SetStateAction<string[] | [""]>>;
  userName: string[] | [""];
}

interface UserContextProviderType {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
  userName: [""],
  setUserName: () => {},
});

export function UserContextProvider({ children }: UserContextProviderType) {
  const [userData, setUserData] = useState<SummonerProps | null>(null);
  const [userName, setUserName] = useState<string[] | [""]>([""]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
}
