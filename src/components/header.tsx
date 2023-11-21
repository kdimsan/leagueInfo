import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center w-full h-16 border-b border-red-500">
      <Image width={50} height={50} src="/logo.png" alt="Logo" />
      <h1>League Finder</h1>
    </header>
  );
}
