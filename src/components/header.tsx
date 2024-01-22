"use client";
import Image from "next/image";
import React from "react";
import FindSummonerInput from "./partials/findSummonerInput";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 border-b border-y-stone-700 xl:h-20">
      <Link href={"/"}>
        <div className="flex justify-center items-center w-fit">
          <Image width={50} height={50} src="/logo.png" alt="Logo" />
          <h1 className="font-bold text-base whitespace-nowrap sm:text-xl xl:text-2xl">
            League Finder
          </h1>
        </div>
      </Link>
      <FindSummonerInput />
    </header>
  );
}
