"use client";
import LeftArrow from "@/images/leftArrow";

import React from "react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center justify-center pb-4 hover:animate-pulse"
      onClick={() => router.back()}
    >
      <LeftArrow height={20} width={20} />
      <span className="font-medium xl:text-xl">Previous</span>
    </button>
  );
}

export default BackButton;
