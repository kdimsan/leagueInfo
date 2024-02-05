import React, { useEffect } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
}
