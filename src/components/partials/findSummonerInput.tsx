import React from "react";

interface FindUsernameInputProps {
  onClick: () => void;
}

export default function FindSummonerInput({ onClick }: FindUsernameInputProps) {
  return (
    <div className="flex justify-center items-center bg-slate-100 rounded-md">
      <input
        className="w-24 px-3 py-2 bg-slate-100 rounded-l-md placeholder-neutral-400  text-black sm:w-36"
        type="text"
        placeholder="Nickname"
      />
      <button
        className="px-2 py-2 rounded-r-md bg-green-700 "
        onClick={onClick}
      >
        F
      </button>
    </div>
  );
}
