import { championRolesOptions } from "@/app/utils/championRoles";
import useChampionTagFilter from "@/hooks/useChampionTagFilter";
import Select, { SingleValue, StylesConfig } from "react-select";
import React from "react";

type ChampionRolesOption = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<ChampionRolesOption, false> = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(25deg, #00ADB5, #71C9CE)",
    color: "white",
    fontSize: "14px",
    minHeight: "40px",
    borderColor: "#6a6b70",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#61dafb"
      : state.isSelected
      ? "#61dafb"
      : "#282c34",
    color: state.isFocused ? "white" : state.isSelected ? "#282c34" : "white",
    padding: 5,
    fontWeight: "500",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    fontWeight: "500",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#282c34",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
};

export default function ChampionTagFilter() {
  const { setChampionTagFilter } = useChampionTagFilter();

  const handleChange = (selectedOption: SingleValue<ChampionRolesOption>) => {
    if (selectedOption) {
      return setChampionTagFilter(selectedOption.value);
    }
  };

  return (
    <>
      <Select<ChampionRolesOption>
        className="w-52 cursor-pointer"
        defaultValue={championRolesOptions[0]}
        onChange={handleChange}
        options={championRolesOptions}
        styles={customStyles}
        placeholder={"Text"}
      />
    </>
  );
}
