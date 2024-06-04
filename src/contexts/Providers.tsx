"use client";
import React from "react";
import { UserContextProvider } from "./userContext";
import { ChampionTagFilterProvider } from "./championTagFilter";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ChampionTagFilterProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </ChampionTagFilterProvider>
    </>
  );
};
