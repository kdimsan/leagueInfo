"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Modal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div>
      <Link
        href="/"
        className="fixed w-full h-screen inset-0 z-50 flex items-center justify-center top-0 left-0
    overflow-x-hidden bg-black bg-opacity-60 overflow-y-hidden"
        scroll={false}
      />
      {children}
    </div>
  );
}

export default Modal;
