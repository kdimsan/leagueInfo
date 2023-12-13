import React from "react";

interface TitleConfigProps {
  title: string;
  className?: string;
}

export default function TitleConfig({ title, className }: TitleConfigProps) {
  return (
    <h3
      className={`${className} w-full flex justify-center mt-14 mb-3 text-lg font-bold xl:mt-0`}
    >
      {title}
    </h3>
  );
}
