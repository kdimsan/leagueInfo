import React from "react";
import { UserContextProvider } from "./userContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>
    </>
  );
};
