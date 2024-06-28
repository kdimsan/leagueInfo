import React from "react";

export default function SubTitle({
  subTitle,
  className,
}: {
  subTitle: string;
  className?: string;
}) {
  return (
    <h5 className={`mt-3 font-semibold font-title tracking-wide ${className}`}>
      {subTitle}
    </h5>
  );
}
