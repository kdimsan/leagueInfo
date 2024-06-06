import React from "react";

interface TitleConfigProps {
  title: string;
  className?: string;
}

export default function TitleConfig({ title, className }: TitleConfigProps) {
  return (
    <h3
      className={`${className} w-full flex flex-wrap items-center text-center justify-center 
      mb-3 text-lg tracking-wide font-bold text-stone-200 font-title text-shadow-costum-shadow`}
    >
      {title}
    </h3>
  );
}
