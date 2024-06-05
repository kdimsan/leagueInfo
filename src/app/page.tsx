import ChampionSection from "@/components/championsSection/championSection";

import { getFreeWeek } from "@/services/getFreeWeek";

const FreeWeek = async () => {
  const freeWeek = await getFreeWeek();

  const { allChampionsRes, freeWeekChampionsData } = freeWeek.FreeWeekData;

  return (
    <>
      <ChampionSection
        allChampionsRes={allChampionsRes}
        freeWeekChampionsData={freeWeekChampionsData}
      />
    </>
  );
};

const Component = () => {
  return (
    <main className="flex flex-1 items-center justify-center md:py-6">
      <FreeWeek />
    </main>
  );
};

export default function Home() {
  return <Component />;
}
