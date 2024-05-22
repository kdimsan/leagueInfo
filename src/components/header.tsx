"use client";
import React from "react";
import FindSummonerInput from "./partials/findSummonerInput";
import Link from "next/link";
import Logo from "./partials/logo/logo";

export default function Header() {
  return (
    <header className="flex flex-col gap-8 items-center p-3 justify-between w-full h-fit border-b border-y-stone-700 sm:flex-row xl:h-20">
      <Link href={"/"}>
        <Logo />
      </Link>
      <FindSummonerInput />
    </header>
  );
}
