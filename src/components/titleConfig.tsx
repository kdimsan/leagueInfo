import React from "react";

interface TitleConfigProps {
  title: string;
  className?: string;
}

export default function TitleConfig({ title, className }: TitleConfigProps) {
  return (
    <h3
      className={`${className} w-full flex justify-center mb-3 text-lg tracking-wide font-bold text-stone-200 font-title`}
    >
      {title}
    </h3>
  );
}
