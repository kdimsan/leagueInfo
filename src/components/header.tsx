"use client";
import Image from "next/image";
import React from "react";
import FindSummonerInput from "./partials/findSummonerInput";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col gap-8 items-center p-3 justify-between w-full h-fit border-b border-y-stone-700 sm:flex-row xl:h-20">
      <Link href={"/"}>
        <div className="flex justify-center items-center w-fit gap-1">
          <Image width={50} height={50} src="/logo.png" alt="Logo" />
          <h1 className="font-bold font-title text-2xl tracking-widest whitespace-nowrap lg:text-3xl">
            League Finder
          </h1>
        </div>
      </Link>
      <FindSummonerInput />
    </header>
  );
}
