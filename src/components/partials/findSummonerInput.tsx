"use client";
import useUserData from "@/hooks/useUserData";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import Search from "../icons/search";
import { regions } from "@/app/utils/regions";
import useOutsideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import axios from "axios";
import { NextRequest } from "next/server";

type Region =
  | "br1"
  | "eun1"
  | "euw1"
  | "jp1"
  | "kr"
  | "la1"
  | "la2"
  | "oc1"
  | "na1"
  | "ph2"
  | "ru1"
  | "sg2"
  | "tw2"
  | "th2"
  | "tr1"
  | "vn2";

const regionMapping: Record<Region, string[]> = {
  br1: ["Brazil"],
  eun1: [
    "Albania",
    "Armenia",
    "Belarus",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Czech Republic",
    "Estonia",
    "Georgia",
    "Hungary",
    "Kosovo",
    "Latvia",
    "Lithuania",
    "Moldova",
    "Montenegro",
    "North Macedonia",
    "Poland",
    "Romania",
    "Russia",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Ukraine",
    "Iceland",
    "Norway",
    "Sweden",
    "Finland",
    "Denmark",
  ],
  euw1: [
    "Austria",
    "Belgium",
    "France",
    "Germany",
    "Ireland",
    "Italy",
    "Luxembourg",
    "Netherlands",
    "Portugal",
    "Spain",
    "Switzerland",
    "United Kingdom",
    "Monaco",
    "Liechtenstein",
    "Andorra",
    "San Marino",
    "Malta",
  ],
  jp1: ["Japan"],
  kr: ["Korea"],
  la1: [
    "Mexico",
    "Belize",
    "Costa Rica",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Nicaragua",
    "Panama",
    "Colombia",
    "Ecuador",
    "Bolivia",
    "Peru",
    "Venezuela",
  ],
  la2: ["Argentina", "Chile", "Paraguay", "Uruguay"],
  na1: ["United States", "Canada"],
  oc1: [
    "Australia",
    "Fiji",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Zealand",
    "Palau",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ],
  ph2: ["Philippines"],
  ru1: ["Russia"],
  sg2: ["Singapore"],
  tw2: ["Taiwan"],
  th2: ["Thailand"],
  tr1: ["Turkey"],
  vn2: ["Vietnam"],
};

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

  interface GeoResponse {
    ip: string;
    network: string;
    version: string;
    city: string;
    region: string;
    region_code: string;
    country: string;
    country_name: string;
    country_code: string;
    country_code_iso3: string;
    country_capital: string;
    country_tld: string;
    continent_code: string;
    in_eu: boolean;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    utc_offset: string;
    country_calling_code: string;
    currency: string;
    currency_name: string;
    languages: string;
    country_area: number;
    country_population: number;
    asn: string;
    org: string;
  }

  const getRegionByCountry = (country: string) => {
    for (const region in regionMapping) {
      if (regionMapping[region as Region].includes(country)) {
        return region;
      }
    }
    return "br1";
  };

  async function GET(req: NextRequest) {}

  const { setUserName } = useUserData();
  const router = useRouter();
  const ref = useRef<HTMLLIElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("br1");

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
    const ipApiUrl = "https://ipapi.co/json/";

    try {
      const response: Promise<GeoResponse> = (await axios.get(ipApiUrl)).data;

      const countryName = (await response).country_name;

      const region = getRegionByCountry(countryName);

      setSelectedRegion(region);
      setValue("region", region);
    } catch (err) {
      return new Response("Internal Server Error", { status: 500 });
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
