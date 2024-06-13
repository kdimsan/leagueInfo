import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex justify-center items-center w-fit gap-1">
      <Image unoptimized width={50} height={50} src="/logo.png" alt="Logo" />
      <h1 className="font-bold font-title text-2xl tracking-widest whitespace-nowrap lg:text-3xl">
        League Finder
      </h1>
    </div>
  );
}
