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
  tr1: ["Türkiye"],
  vn2: ["Vietnam"],
};

interface GeoResponse {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
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

export async function GET(req: NextRequest) {
  const ipApiUrl = "http://ip-api.com/json";
  try {
    const response: Promise<GeoResponse> = (await axios.get(ipApiUrl)).data;

    const countryName = (await response).country;

    const region = getRegionByCountry(countryName);

    return new Response(region);
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
