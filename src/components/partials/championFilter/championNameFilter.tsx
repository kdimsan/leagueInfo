import useChampionTagFilter from "@/hooks/useChampionTagFilter";
import React from "react";

export default function ChampionNameFilter() {
  const { championNameFilter, setChampionNameFilter } = useChampionTagFilter();

  const changeFilterFn = (e: string) => {
    setChampionNameFilter(e);
  };
  return (
    <div className="flex flex-col gap-1">
      <input
        className="w-52 h-10 text-sm font-medium text-white  rounded-[4px] p-2 bg-gradient-to-l from-custom-pallete-cyan-500 to-custom-pallete-cyan-700
        placeholder:text-white focus:outline-none focus:border focus:border-blue-500"
        type="text"
        name="name"
        id="name"
        onChange={(e) => changeFilterFn(e.target.value)}
        defaultValue={championNameFilter}
        placeholder="Champion Name"
      />
    </div>
  );
}
