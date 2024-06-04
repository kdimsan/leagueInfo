import { championTags } from "@/app/utils/championRoles";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";
import React from "react";

export default function ChampionTagFilter() {
  const { championTagFilter, setChampionTagFilter } = useChampionTagFilter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChampionTagFilter(e.target.value);
  };

  return (
    <div className="text-slate-200 ">
      <form className="">
        <label htmlFor="champion_tag">Champion Role:</label>
        <select
          className="appearance-none bg-match-details-blue-light px-2 focus:outline-none animate-dropdown"
          name="champion_tag"
          id="champion_tag"
          value={championTagFilter}
          onChange={handleChange}
        >
          {Object.values(championTags).map((tag, index) => (
            <option className="font-medium" value={tag} key={index}>
              {tag}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
