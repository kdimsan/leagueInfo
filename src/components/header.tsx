"use client";
import Image from "next/image";
import React from "react";
import FindSummonerInput from "./partials/findSummonerInput";
import { api } from "@/app/utils/api/api";
import useUserData from "@/hooks/useUserData";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full gap-2 h-16 border-b border-y-stone-700 xl:h-20">
      <div className="flex justify-center items-center w-fit">
        <Image width={50} height={50} src="/logo.png" alt="Logo" />
        <h1 className="font-bold text-base whitespace-nowrap sm:text-xl xl:text-2xl">
          League Finder
        </h1>
      </div>
      <FindSummonerInput />
    </header>
  );
}
