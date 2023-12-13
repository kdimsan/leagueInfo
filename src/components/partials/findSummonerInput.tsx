import React from "react";

interface FindUsernameInputProps {
  onClick: () => void;
}

export default function FindSummonerInput({ onClick }: FindUsernameInputProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        className="bg-slate-100 px-3 py-2 rounded-md text-white placeholder-neutral-400 mb-4"
        type="text"
        placeholder="Nickname"
      />
      <button
        className="px-12 py-2 border rounded-md bg-green-700"
        onClick={onClick}
      >
        Find
      </button>
    </div>
  );
}
