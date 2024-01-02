import { UserContext } from "@/contexts/userContext";
import React, { useContext } from "react";

export default function useUserData() {
  return useContext(UserContext);
}
