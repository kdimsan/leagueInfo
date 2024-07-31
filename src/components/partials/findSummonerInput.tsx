import useUserData from "@/hooks/useUserData";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import Search from "../icons/search";
import { regions } from "@/app/utils/regions";
import useOutsideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import axios from "axios";

interface Inputs {
  riotId: string;
  region: string;
}

export default function FindSummonerInput() {
  const {
    handleSubmit,
    register,
    resetField,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const { setUserName } = useUserData();
  const router = useRouter();
  const ref = useRef<HTMLLIElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("euw1");

  const handleSelectRegionState = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(ref, handleSelectRegionState);

  const handleValue = (value: string) => {
    setValue("region", value);
    setIsOpen(false);
    setSelectedRegion(value);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const [gameName, tagLine] = data.riotId.split("#");
    const accountRegion = data.region;

    setUserName([gameName, tagLine]);
    router.push(`/${gameName}-${tagLine}-${accountRegion}/summoner`);
    resetField("riotId");
  };

  const fetchLocationData = async () => {
    try {
      const response: string = (await axios.get(`/api/region`)).data;
      setSelectedRegion(response);
    } catch (error) {
      console.error("Error fetching region:", error);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <div className=" z-[99999]">
      <form
        className="w-full  flex relative h-10 items-center bg-slate-300 justify-between rounded-md rounded-r-lg lg:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          type="button"
          onClick={handleSelectRegionState}
          className="px-1 h-full w-1/3 relative overflow-hidden 
          text-neutral-600 font-semibold text-ellipsis whitespace-nowrap
          after:content[''] after:absolute after:w-px after:h-3 after:bg-black after:top-1/2 after:right-0 after:-mt-1.5"
          {...register("region")}
          value={selectedRegion}
        >
          <div className="flex items-center justify-center gap-1">
            <Image
              src={`/regions/${selectedRegion}.svg`}
              width={24}
              height={24}
              alt="server region"
              quality={100}
              className="hidden sm:block"
              unoptimized
            />
            {selectedRegion
              .split("")
              .filter((char) => /[a-zA-Z]/.test(char))
              .join("")
              .toUpperCase()}
          </div>
        </button>
        {isOpen && (
          <ul
            className="absolute top-8 rounded-b-md 
          cursor-pointer animate-dropdown transition-all drop-shadow-custom2"
          >
            {Object.entries(regions).map(([key, region]) => (
              <li
                className="flex items-center gap-1 p-1 border-b border-slate-500 bg-slate-300
              last:rounded-b-md hover:brightness-75 transition-all"
                ref={ref}
                key={key}
                onClick={() => handleValue(key)}
              >
                <Image
                  src={`/regions/${key}.svg`}
                  width={24}
                  height={24}
                  alt="server region"
                  unoptimized
                />
                <span className="font-semibold text-neutral-800">{region}</span>
              </li>
            ))}
          </ul>
        )}
        <input
          className="w-full mx-1 py-1 px-2 rounded-md text-neutral-950 font-normal bg-slate-300 outline-none"
          {...register("riotId", {
            required: "Please write your GameName.",
            pattern: {
              value: /^[^\s]+#[^\s]+$/,
              message: "Please make sure to include your #tagLine",
            },
          })}
          placeholder="GameName+ #tagLine"
          type="text"
        />
        <button
          className="bg-gradient-to-t from-cyan-200 via-cyan-400 to-sky-500 h-full p-2 rounded-r-md hover:brightness-90 transition-all"
          type="submit"
        >
          <Search />
        </button>
      </form>
      <p>{errors.riotId?.message}</p>
    </div>
  );
}
